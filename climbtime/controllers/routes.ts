import {MongoClient, ObjectId} from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
const URI = process.env.URI;
if (!URI) {
    throw new Error('Missing URI in environment variables');
}
const client = new MongoClient(URI);

const getRoutes = async (req: any, res: any) => {
    try {
        client.connect();
        const db = client.db('climbtime');
        const routes = await db.collection('routes').find().toArray();
        res.json(routes);
    } finally {
        await client.close();
    }
}

const getRouteById = async (req: any, res: any) => {
    try {
        client.connect();
        const db = client.db('climbtime');
        const route = await db.collection('routes').findOne({ _id: new ObjectId(req.params.id) });
        res.json(route);
    } finally {
        await client.close();
    }
}

const createRoute = async (req: any, res: any) => {
    try {
        client.connect();
        const db = client.db('climbtime');
        const result = await db.collection('routes').insertOne(req.body);
        res.json(result.insertedId);
    } finally {
        await client.close();
    }
}

const updateRoute = async (req: any, res: any) => {
    try {
        client.connect();
        const db = client.db('climbtime');
        const result = await db.collection('routes').updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
        res.json(result);
    } finally {
        await client.close();
    }
}

const deleteRoute = async (req: any, res: any) => {
    try {
        client.connect();
        const db = client.db('climbtime');
        const result = await db.collection('routes').deleteOne({ _id: new ObjectId(req.params.id) });
        res.json(result);
    } finally {
        await client.close();
    }
}

export { getRoutes, getRouteById, createRoute, updateRoute, deleteRoute };