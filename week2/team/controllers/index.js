const {MongoClient} = require('mongodb');
require('dotenv').config();
const URI = process.env.URI;


async function main(){
    const client = new MongoClient(URI);
    try{
        await client.connect();
        await listDatabases(client);
        const data = await getData(client);
        return data;
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);

const getData = async (req, res, next) => {
    const client = new MongoClient(URI);
    await client.connect();
    const data = await client.db("teamActivites").collection("userData").findOne({name: "GageD'Orlando"});
    res.json(data);
};

module.exports = {main, getData};