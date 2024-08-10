import { Request, Response } from "express";
import { getMongoDB } from "../../services/mongo";
import { User } from "../../models/user";


const assignRole = async (req: Request, res: Response) => {
    const { userId, role } = req.body;

    if (!userId || !role) {
        return res.status(400).json({ message: "Userid and role is required" });

    }

    try {
        const db = getMongoDB();
        const userCollection = db.collection<User>("users");
        const user = await userCollection.findOne({ id: userId });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        await userCollection.updateOne({
            id: userId
        },
            { set: { role: role } }

        );

        return res.status(200).json({ message: `User role updated to ${role}` });


    } catch (error) {
        console.log("Error while setting role", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
export default {
    assignRole
};