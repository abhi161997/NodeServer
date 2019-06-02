const mongodbUrl = {
    url : process.env.url || 'mongodb://localhost:27017/',
    dbName: process.env.dbName || 'AbhinawDb'
}


module.exports = { 
    mongodbUrl
}