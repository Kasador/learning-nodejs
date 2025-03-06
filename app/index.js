const express = require('express');
// import { express } from 'express';

const app = express();

app.get('/', (req, res) => { // use '/' route 
    res.status(200).json({ // get status 200 - success and return data into JSON
        message: 'GET - root',
        metadata: {
            hostname: req.hostname, 
            method: req.method
        }
    });
});

module.exports = app; // export app, used in server.js file 