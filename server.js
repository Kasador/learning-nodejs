const http = require('http'); // importing the http module from node:http

const arrayList = [
    {id: 1, item:  "item 1"},
    {id: 2, item:  "item 2"},
    {id: 3, item:  "item 3"},
    {id: 4, item:  "item 4"}
]; // array list

const server = http.createServer((req, res) => { // using the createServer method from http module
    /* setHeader Types >>> 
        text/html
        application/json
        image/jpeg
        image/png
        image/gif
        audio/mpeg
        video/mp4
        application/javascript
        text/css
        text/plain
    */
    res.setHeader('Content-Type', 'application/json'); // setting the response for the header

    // res.write("<h1>h1 header</h1>"); // simple write response

    res.end( // ending/final response
        JSON.stringify( // This is to convert object to string, err: The "chunk" argument must be of type string or an instance of Buffer or Uint8Array.
            {
                sucess: true,
                method: req.method,
                data: arrayList
            }
        )
    );
});

const PORT = 3000; // setting port number

server.listen(PORT, () => { // listen to the port and then console log message
    console.log(`Server running at http://localhost:${PORT}/`);
})