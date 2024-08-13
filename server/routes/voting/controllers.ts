
import e, { Request, Response } from "express";
import { getMongoDB } from "../../services/mongo";
import { Voter } from "../../models/voter";
import { User } from "../../models/user";
import { Candidate } from "../../models/candidate";
import { Election } from "../../models/election";
import { Vote } from "../../models/vote";
import { ObjectId } from "mongodb";
import { Roles } from "../../models/roles";


const castVote = async (req: Request, res: Response) => {

    const voterId = req.params['voterId'] as string;
    const candidateId = req.params['candidateId'] as string;
    const electionId = req.params['electionId'] as string;

    if (!voterId || !candidateId || !electionId) {
        return res.status(400).json({ message: "Voter ID, Candidate ID ,and Election Id are required " })

    }
    try {
        const db = getMongoDB();
        const voterCollection = db.collection<Voter>('voters');
        const candidateCollection = db.collection<Candidate>('candidates');
        const electionsCollections = db.collection<Election>('election');
        const votesCollection = db.collection<Vote>('votes');

        //verify voter's eligibility to vote
        const voter = await voterCollection.findOne({ voterId });

        if (!voter) {
            return res.status(404).json({ message: 'Voter not found' });
        }

        if (voter.role == Roles.ADMIN || !voter.eligibleToVote) {
            return res.status(403).json({ message: 'Voter is not eligible to vote' });
        }

        //verify the election status

        const election = await electionsCollections.findOne({ electionId });
        if (!election) {
            return res.status(404).json({ message: 'Election not found' });
        }
        const currentDate = new Date();
        if (election.status !== "active" ||
            (election.startDate && currentDate < new Date(election.startDate)) ||
            (election.endDate && currentDate > new Date(election.endDate))) {
            return res.status(403).json({ message: "Election is not currently active" })
        }

        //check if the voter has already voted in the election
        const existingVote = await votesCollection.findOne({ eid: electionId, uid: voterId });

        if (existingVote) {
            return res.status(403).json({ messgae: "Voter has already voted in this election" });

        }

        //ensuring if the candidate exists and is part of the election

        const candidate = await candidateCollection.findOne({ candidateId, electionId });

        if (!candidate) {
            return res.status(404).json({ message: "candidate is either not part of the election or is not found" });

        }

        //Record the vote 

        const newVote: Vote = {
            voteId: new ObjectId().toHexString(),
            eid: electionId,
            cid: candidateId,
            uid: voterId,
            createdAt: new Date()
        }
        await votesCollection.insertOne(newVote);

        //Incrementing the candidate's vote count

        await candidateCollection.updateOne({ candidateId },

            { $inc: { votes: 1 } }
        );

        return res.status(200).json({ message: 'Vote cast successfully', vote: newVote });

    } catch (error) {
        console.log("Error during voting process", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
const countVotes = async (req: Request, res: Response) => {
    const { electionId } = req.params;

    if (!electionId) {
        return res.status(400).json({ message: "Election id is required" });

        try {

            const db = getMongoDB();
            const candidateCollection = db.collection<Candidate>("candidates");


            //aggregrate votes count

            const votesCounts = await candidateCollection.aggregate([{ $match: { electionId } },
            { project: { candidateId: 1, votes: 1 } },
            { sort: { votes: -1 } }


            ]).toArray();
            if (votesCounts.length == 0) {
                return res.status(404).json({ message: "No candidates found for the election" });
            }

            return res.status(200).json({ votesCounts });
        } catch (error) {
            console.log("Error while getting the vote counts", error);
            res.status(500).json({ message: "Internal server error" });
        }

    }
}

export default {

    castVote,
    countVotes
};