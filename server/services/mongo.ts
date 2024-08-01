import { Db, MongoClient } from "mongodb";

import dotenv from "dotenv"
dotenv.config();


const url = process.env.MONGO_URL as string;


if (!url) {
    throw new Error("MONGO_URL is not defined in the environment variables");
}

let mongoDb: Db


export function getMongoDB() {
    return mongoDb
}

export async function connectToMongo(): Promise<void> {
    if (mongoDb == null) {
        const client = new MongoClient(url)

        await client.connect();
        console.log("Connected successfully to mongo DB")
        mongoDb = client.db("voting_system")

    }
}

export async function getDocument(collectionName: string, id: string) {
    if (mongoDb == null) return;
    return mongoDb.collection(collectionName).findOne({ _id: { equals: id } }).catch((e) => {

        console.log(e)
    });
}

export async function addDocument(collectionName: string, id: string, data: Record<string, any>) {
    if (mongoDb == null) return null;
    await mongoDb.collection(collectionName).updateOne({ _id: { equals: id } }, { $set: { ...data, id: id } }, { upsert: true }


    ).catch((e) => { console.log(e) })
}

export async function deleteDocument(collectionName: string, id: string) {
    if (mongoDb == null) return;
    await mongoDb.collection(collectionName).deleteOne({ _id: { equals: id } }).catch((e) => { console.log(e) });
}