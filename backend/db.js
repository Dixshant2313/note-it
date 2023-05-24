const mongoose = require('mongoose');

const server = '127.0.0.1:27017';
const  database = 'inotebook';
 const connectToMongo = async () => {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`);
        console.log("Connected to Mongo Successfully")
    } catch (err) {
        console.log("Connection to Mongo Failed", err);
    }
 };

 module.exports = connectToMongo;