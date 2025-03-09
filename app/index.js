const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json()); // middleware

app.get('/', (req, res) => { // use '/' route 
    res.status(200).json({ // get status 200 - success and return data into JSON
        message: 'Server is up and running. To use the api, please use /api/users',
        metadata: {
            hostname: req.hostname, 
            method: req.method
        }
    });
});

app.use('/api/users', routes);

module.exports = app; // export app, used in server.js file 