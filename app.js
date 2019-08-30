const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const usersRouter = require('./routes/usersRouter')
const config = require('./config/database.js');

// Connect To Database
mongoose.connect(config.database, {useNewUrlParser: true});

// On Connection 
mongoose.connection.on('connected', () => {
    console.log('Connected to database', config.database);
})

// On Error 
mongoose.connection.on('error', (error) => {
    console.log('Connected to database', error);
})

const app = express();

// CORS Middleware
app.use(cors());

app.use(express.static(path.join(__dirname, 'client')))

// Body parser
app.use(bodyParser.json());

app.use('/users', usersRouter);

const PORT = 3000;

// Index Route
app.get('/', (req, res, next) => {
    res.send('Invalid endpoint!');
})

// Start Server
app.listen(PORT, ()=> {
    console.log('Server started on port', PORT);
})