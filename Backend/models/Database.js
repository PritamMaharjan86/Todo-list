const mongoose = require('mongoose');

const mongo_url = process.env.MONGODB;

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDb connected');
    })
    .catch((error) => {
        console.log('MongoDb Connection error', error);
    })
