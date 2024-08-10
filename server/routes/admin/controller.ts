import { Request, Response } from "express";
import { getMongoDB } from "../../services/mongo";
import { User } from "../../models/user";
import { ObjectId } from "mongodb";

const assignRole = async (req: Request, res: Response) => {
    const adminId = req.headers['adminId'] as string;
    const userId = req.body['uid'] as string;
    const role = req.body['roles'] as string;

    if (!userId || !role) {
        return res.status(400).json({ message: "User ID and role are required" });
    }

    try {
        const db = getMongoDB();
        const userCollection = db.collection<User>('users');

        // Check if the requester is an admin
        const adminUser = await userCollection.findOne({ _id: new ObjectId(adminId), role: "admin" });

        if (!adminUser) {
            return res.status(403).json({ message: "Only admins can assign roles" });
        }

        // Find the user to update
        const user = await userCollection.findOne({ _id: new ObjectId(userId) });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update the user's role
        await userCollection.updateOne({ _id: new ObjectId(userId) }, { $set: { role } });

        return res.status(200).json({ message: 'Role assigned successfully' });

    } catch (error) {
        console.error("Error assigning role", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default {
    assignRole,
};
