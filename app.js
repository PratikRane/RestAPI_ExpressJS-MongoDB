const express = require('express')
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();
const postsRoute = require('./routes/posts');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

//app.use('/posts', () => {
//   console.log('Running Middleware now...');
//});

//ROUTES
app.use('/posts', postsRoute);

app.get('/', (req, res) =>{
    res.send('On Home page');
});


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION_STRING, 
                { useNewUrlParser: true},
                () => console.log('Connected to DB'));

//Start listening to port
app.listen(3000);