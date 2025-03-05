# 🗂 Overview to Learning **NodeJS**

### Repo made to learn **_NodeJS._** This will also include making restful APIs and dealing with requests and responses.

# 🛠️ 🐛 Progress/Bugs

### ⚙️ Creating a basic server and it's setup:
### ╰┈➤

```js 
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})
```

### 🚧 Running the server with **_Nodemon_** for effective development. 
### ╰┈➤

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

<img width="344" alt="Image" src="https://github.com/user-attachments/assets/0eeb06c8-e3b2-4334-a933-64702874ff0e" />

```bash
# This will run nodemon server.js for updates on save
npm run dev
```

### 🧐 Test your running server/setup with Postman.
### ╰┈➤

<img width="600" alt="Image" src="https://github.com/user-attachments/assets/a2367ac3-efc3-4b05-bd02-6107de151b76" />

### 🗂️ Let's make our **_own_** API. 
### ╰┈➤

```js
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
```

<img width="523" alt="Image" src="https://github.com/user-attachments/assets/156b197a-a328-4773-975d-69220ed1a4d8" />
