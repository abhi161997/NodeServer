const mongodbUrl = {
    url : process.env.url || 'mongodb+srv://abhinaw:1997abhi123@abhinawdb-j6im7.mongodb.net/AbhinawDb?retryWrites=true&w=majority/',
    dbName: process.env.dbName || 'AbhinawDb'
}


module.exports = { 
    mongodbUrl
}
