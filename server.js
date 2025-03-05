const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>h1 header</h1>");
    res.write("<h2>h2 header</h2>");
    res.write("<h3>h3 header</h3>");
//   res.end('Hello World\n');
    res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})