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

const login = async (req: Request, res: Response) => {
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
    const { username, fullName, email, password, role, isEmailVerified, phoneNumber, isAdmin, age, isPhoneNumberVerified, userPhoto } = req.body;
    if (!username || !password || !email || !fullName) {
        return res.status(400).json({ message: 'Username,password ,email and fullname are required' });
    }
    try {
        const db = getMongoDB();
        const userCollections = db.collection<User>('users');
        //check if the email or username already exists
        const existingUser = await userCollections.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: "username or email already exists" });

        }

        const hashedPassword = await bcrypt.hash(password, 10);
        //create new user
        const newUser: User = {
            username, fullName, email, password: hashedPassword, role: role || 'guest', age, isEmailVerified, phoneNumber, isPhoneNumberVerified, isAdmin: role === 'admin', createdAt: new Date(), updatedAt: new Date(), userPhoto

        };
        await userCollections.insertOne(newUser);
        return res.status(201).json({ message: "User registered successfully", user: newUser });

    }
    catch (e) {
        console.log("user registration error: ", e);
        return res.status(500).json({ message: "Internal server error" });
    }
}
export default {
    login, register
}