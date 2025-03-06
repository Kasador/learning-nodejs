const http = require('http'); // importing the http module from node:http
require('dotenv').config(); // import environment variables from .env file
const app = require('./app'); // import data from index.js

const server = http.createServer(app); // throw data from express app to http server

server.listen(process.env.PORT, () => { // listen to the port and then console log message
    console.log(`Server running at http://localhost:${process.env.PORT}/`);
});