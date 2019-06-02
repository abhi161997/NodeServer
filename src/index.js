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

const port = process.env.PORT;

app.listen(port, () => 
   { console.log(`Server Started Successfully`) }
);
