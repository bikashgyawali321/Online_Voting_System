import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getMongoDB } from "../../services/mongo";
import { User } from "../../models/user";
import dotenv from 'dotenv';


dotenv.config();

const Secret_Key = process.env.JWT_SECRET_ACCESS_TOKEN_KEY;
if (!Secret_Key) {
    throw new Error('JWT_SECRET_ACCESS_TOKEN_KEY is not defined in the environment variables.');
}

export const login = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Username ,email and password are required.' });
    }
    try {
        //checking if the user exists
        const db = getMongoDB();
        const userCollections = db.collection<User>('users');

        const user = await userCollections.findOne({ username, email });
        if (!user) {
            return res.status(401).json({ message: "Invalid username or email" });
        }
        const matchingPassword = await bcrypt.compare(password, user.password);
        if (!matchingPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const accessToken = jwt.sign({ id: user.id, username: user.username, role: user.role },
            Secret_Key
        );
        return res.status(200).json({ message: 'Login successfull', accessToken });
    }
    catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: "Internal server error" });
    }


}

const register = async (req: Request, res: Response) => {

}