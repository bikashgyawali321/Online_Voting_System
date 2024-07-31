import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getMongoDB } from "../../services/mongo";
import { User } from "../../models/user";
import dotenv from 'dotenv';
import { ObjectId } from "mongodb";


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
            Secret_Key, { algorithm: 'HS256', expiresIn: '1h' }
        );
        return res.status(200).json({ message: 'Login successfull', accessToken });
    }
    catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: "Internal server error" });
    }


}

const registerUser = async (req: Request, res: Response) => {
    console.log("hit");

    const { username, password, email, fullName, role, isEmailVerified, phoneNumber, isAdmin, age, isPhoneNumberVerified, userPhoto } = req.body.user;

    console.log(username);

    if (!username || !password || !email || !fullName) {
        return res.status(400).json({ message: 'Username, password, email, and full name are required' });
    }

    try {
        const db = getMongoDB();
        const userCollections = db.collection<User>('users');


        const existingUser = await userCollections.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: "Username or email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);


        const newUser: User = {
            id: new ObjectId().toHexString(),
            username,
            fullName,
            email,
            password: hashedPassword,
            role: role || 'guest',
            age,
            isEmailVerified,
            phoneNumber,
            isPhoneNumberVerified: phoneNumber.length === 10,
            isAdmin: role === 'admin',
            createdAt: new Date(),
            updatedAt: new Date(),
            userPhoto
        };

        await userCollections.insertOne(newUser);
        console.log(newUser);
        return res.status(201).json({ message: "User registered successfully", user: newUser });

    } catch (e) {
        console.log("User registration error: ", e);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const getMe = async (req: Request, res: Response) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        console.error('No authorization token provided.');
        return res.status(401).json({ message: "Authorization token is needed" });
    }

    try {
        console.log('Verifying token...');
        const decodedToken = jwt.verify(token, Secret_Key, { algorithms: ['HS256'] }) as jwt.JwtPayload;;


        console.log('Token verified. Decoded token:', decodedToken);
        const uid = decodedToken.id;
        if (!uid) {
            console.error('No user ID found in the token.');
            return res.status(401).json({ message: "Invalid token" });
        }

        console.log('Fetching user with ID:', uid);
        const db = getMongoDB();
        const userCollections = db.collection<User>('users');
        const user = await userCollections.findOne({ id: uid });

        if (!user) {
            console.error('User not found with ID:', uid);
            return res.status(401).json({ message: "User not found" });
        }

        console.log('User found:', user);
        return res.status(200).json({ user });
    } catch (error) {
        console.error('Error during getMe execution:', error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default {
    login, registerUser, getMe
}