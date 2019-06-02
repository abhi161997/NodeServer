const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userController = require('./controller/user');

const jwt = require('./helper/jwt');
const errorHandler = require('./helper/errorHandler');


const app = express();

app.use(cors());
app.use(jwt());
app.use(errorHandler);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/user', userController);

app.use(errorHandler);

app.listen(8000, () => 
   { console.log(`Server Started Successfully`) }
);