const http = require('http'); // importing the http module from node:http

const arrayList = [
    {id: 1, item:  "item 1"},
    {id: 2, item:  "item 2"},
    {id: 3, item:  "item 3"},
    {id: 4, item:  "item 4"}
]; // array list

const fetchUserData = (userId) => {
    return new Promise ((resolve, reject) => {
        const user = { id: userId, name: 'User ' + userId };
        if (!userId) {
            reject('User not found!');
        } else {
            resolve(user);
        }
    })
}

const fetchUserPosts = (userId) => {
    return new Promise ((resolve, reject) => {
        const posts = ['Post 1', 'Post 2', 'Post 3'];
        if (!userId) {
            reject('And if the user is not found, then posts will not be found!');
        } else {
            resolve(posts);
        }
    })
}

const fetchPostComments = (postId) => {
    return new Promise ((resolve, reject) => {
        const comments = ['Comment 1', 'Comment 2'];
        if (!postId) {
            reject('And if the posts are not found, then no comments!');
        } else {
            resolve(comments);
        }
    })
}

fetchUserData(1)
.then((user) => {
    console.log("User: ", user);
}).catch((err) => {
    console.error("Oh no, something went wrong!", err);
})
.then(() => fetchUserPosts(1))
.then((post) => {
    console.log("Posts: ", post);
}).catch((err) => {
    console.error("Oh no, something went wrong!", err);
})
.then(() => fetchPostComments(1))
.then((comments) => {
    console.log("Comments: ", comments);
}).catch((err) => {
    console.error("Oh no, something went wrong!", err);
})

// fetchUserData(1)
// .then((user) => {
//     console.log("User: ", user);

//     fetchUserPosts()
//     .then((post) => {
//         console.log("Posts: ", post);
//     })

//     fetchPostComments()
//     .then((comments) => {
//         console.log("Comments: ", comments);
//     })
// })
// .catch((err) => {
//     console.error("Oh no, something went wrong!", err);
// })

// Promise.all([
//     fetchUserData(1),
//     fetchUserPosts(1),
//     fetchPostComments(1)
// ]).then(([User, Posts, Comments]) => {
//     console.log({User, Posts, Comments});
// }).catch((err) => {
//     console.error("Oh no, something went wrong!", err);
// })

const server = http.createServer((req, res) => { // using the createServer method from http module
    /* setHeader Types >>> 
        text/html
        application/json
        text/plain

        etc...
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

// fetchUserData(1, (user) => {

// })

// const fetchUserData = new Promise((resolve, reject) => {
//     const user = { id: userId, name: 'User ' + userId };
//     resolve(user);
// });


/* Assignment to Complete >>> 

// Task: Refactor the following code to use a promise chain instead of nested callbacks.
// The function should fetch a user, then their posts, and finally their comments.

function fetchUserData(userId, callback) {
  setTimeout(() => {
    const user = { id: userId, name: 'User ' + userId };
    callback(user);
  }, 1000);
}

function fetchUserPosts(userId, callback) {
  setTimeout(() => {
    const posts = ['Post 1', 'Post 2', 'Post 3'];
    callback(posts);
  }, 1000);
}

function fetchPostComments(postId, callback) {
  setTimeout(() => {
    const comments = ['Comment 1', 'Comment 2'];
    callback(comments);
  }, 1000);
}

// Example usage (to be refactored):
fetchUserData(1, (user) => {
  console.log('User:', user);
  fetchUserPosts(user.id, (posts) => {
    console.log('Posts:', posts);
    fetchPostComments(posts[0], (comments) => {
      console.log('Comments:', comments);
    });
  });
});

// Your task: Rewrite the above code using Promises and .then() chain.
// Bonus: Implement error handling in your promise chain.

*/
