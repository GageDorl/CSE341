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
        await client.connect();
        const db = client.db('climbtime');
        const crags = await db.collection('crags').find().toArray();
        res.json(crags);
    } catch (error: any) {
        res.status(error.status || 500).json({ error: 'Internal Server Error' });
    } finally {
        await client.close();
    }
}

const getCragById = async (req: any, res: any) => {
    try {
        await client.connect();
        const db = client.db('climbtime');
        const crag = await db.collection('crags').findOne({ _id: new ObjectId(req.params.id) });
        res.json(crag);
    } catch (error: any) {
        console.log(error);
        res.status(error.status || 500).json({ error: 'Internal Server Error' });
    } finally {
        await client.close();
    }
}

const createCrag = async (req: any, res: any) => {
    try {
        const cragData = {
            name: req.body.name,
            location: req.body.location,
            description: req.body.description,
            rockType: req.body.rockType,
            approachTime: req.body.approachTime,
            style: req.body.style,
            gradeRange: req.body.gradeRange
        }
        await client.connect();
        const db = client.db('climbtime');
        const result = await db.collection('crags').insertOne(cragData);
        res.json(result.insertedId);
        res.status(201).end();
    } catch (error: any) {
        res.status(error.status || 500).json({ error: 'Internal Server Error' });
    } finally {
        await client.close();
    }
}

const updateCrag = async (req: any, res: any) => {
    try {
        const cragData = {
            name: req.body.name,
            location: req.body.location,
            description: req.body.description,
            rockType: req.body.rockType,
            approachTime: req.body.approachTime,
            style: req.body.style,
            gradeRange: req.body.gradeRange
        }
        await client.connect();
        const db = client.db('climbtime');
        const result = await db.collection('crags').updateOne({ _id: new ObjectId(req.params.id) }, { $set: cragData });
        res.status(204).end();
    } catch (error: any) {
        res.status(error.status || 500).json({ error: 'Internal Server Error' });
    } finally {
        await client.close();
    }
}

const deleteCrag = async (req: any, res: any) => {
    try {
        await client.connect();
        const db = client.db('climbtime');
        const result = await db.collection('crags').deleteOne({ _id: new ObjectId(req.params.id) });
        res.status(200).json(result);
    } catch (error: any) {
        res.status(error.status || 500).json({ error: 'Internal Server Error' });
    } finally {
        await client.close();
    }
}

export { getCrags, getCragById, createCrag, updateCrag, deleteCrag };