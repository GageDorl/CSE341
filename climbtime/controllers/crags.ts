import {MongoClient, ObjectId} from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
import process from 'process';
const URI = process.env.URI;
if (!URI) {
    throw new Error('Missing URI in environment variables');
}
const client = new MongoClient(URI);

const getCrags = async (req: any, res: any) => {
    try {
        client.connect();
        const db = client.db('climbtime');
        const crags = await db.collection('crags').find().toArray();
        res.json(crags);
    } finally {
        await client.close();
    }
}

const getCragById = async (req: any, res: any) => {
    try {
        client.connect();
        const db = client.db('climbtime');
        const crag = await db.collection('crags').findOne({ _id: new ObjectId(req.params.id) });
        res.json(crag);
    } finally {
        await client.close();
    }
}

const createCrag = async (req: any, res: any) => {
    try {
        client.connect();
        const db = client.db('climbtime');
        const result = await db.collection('crags').insertOne(req.body);
        res.json(result.insertedId);
    } finally {
        await client.close();
    }
}

const updateCrag = async (req: any, res: any) => {
    try {
        client.connect();
        const db = client.db('climbtime');
        const result = await db.collection('crags').updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
        res.json(result);
    } finally {
        await client.close();
    }
}

const deleteCrag = async (req: any, res: any) => {
    try {
        client.connect();
        const db = client.db('climbtime');
        const result = await db.collection('crags').deleteOne({ _id: new ObjectId(req.params.id) });
        res.json(result);
    } finally {
        await client.close();
    }
}

export { getCrags, getCragById, createCrag, updateCrag, deleteCrag };