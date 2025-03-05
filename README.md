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