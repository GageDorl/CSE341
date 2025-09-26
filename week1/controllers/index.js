const {MongoClient, ObjectId} = require('mongodb');
require('dotenv').config();
const URI = process.env.URI;

const getAllContacts = async (req, res, next) => {
    const client = new MongoClient(URI);
    await client.connect();
    const data = await client.db("personalAssignment").collection("contacts").find({}).toArray();
    console.log(data);
    res.send(data);
};

const getContact = async (req, res, next) => {
    const client = new MongoClient(URI);
    await client.connect();
    const data = await client.db("personalAssignment").collection("contacts").findOne({_id: new ObjectId(req.query.id)});
    res.json(data);
}

const beautifulGirl = (req, res, next) => {
    res.json('Rory Mashack');
};

module.exports = { beautifulGirl, getAllContacts, getContact };