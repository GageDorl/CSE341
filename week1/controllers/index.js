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
    const data = await client.db("personalAssignment").collection("contacts").findOne({_id: new ObjectId(req.params.id)});
    res.json(data);
}

const createContact = async (req, res, next) => {
    const client = new MongoClient(URI);
    await client.connect();
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const results = await client.db("personalAssignment").collection("contacts").insertOne(contact);

    res.json(results.insertedId);
}

const updateContact = async (req, res, next) => {
    const client = new MongoClient(URI);
    await client.connect();
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const results = await client.db("personalAssignment").collection("contacts").replaceOne({_id: new ObjectId(req.params.id)}, contact);
    res.status(204).send();
}

const deleteContact = async (req, res, next) => {
    const client = new MongoClient(URI);
    await client.connect();
    await client.db("personalAssignment").collection("contacts").deleteOne({_id: new ObjectId(req.params.id)});
    res.json("Contact Deleted");
}

const beautifulGirl = (req, res, next) => {
    res.json('Rory Mashack');
};

module.exports = { beautifulGirl, getAllContacts, getContact, updateContact, createContact, deleteContact };