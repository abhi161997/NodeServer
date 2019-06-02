const config = require('../config/config');

const mongoose = require('mongoose');
const user = require('../model/user');

if(mongoose.connect(process.env.MONGODB_URI || config.mongodbUrl.url + config.mongodbUrl.dbName, { useCreateIndex: true, useNewUrlParser: true })
    {
        console.log('Database Connected Successfully')
    }
mongoose.Promise = global.Promise;

module.exports = {
    User: user
};
