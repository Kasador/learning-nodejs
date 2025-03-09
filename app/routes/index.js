const express = require('express');
const router = express.Router();

const users = [
    {
        id: 1,
        name: 'John Doe',
        age: 43
    },
    {
        id: 2,
        name: 'Hunter Shaw',
        age: 29
    },
    {
        id: 3,
        name: 'Karol Mentiani Cruz',
        age: 28
    },
    {
        id: 4,
        name: 'Patrick Shaw',
        age: 30
    },
    {
        id: 5,
        name: 'Don Shaw',
        age: 65
    }
]

router.get('/', (req, res) => { // use '/' route 
    res.status(200).json({ // get status 200 - success and return data into JSON
        message: 'GET from /api/users',
        metadata: {
            hostname: req.hostname, 
            method: req.method
        },
        data: users
    });
});

// defining params for routes
router.get('/:id', (req, res) => { // get > put > delete
    const { id } = req.params;
    const findUser = users.find(user => user.id === parseInt(id)); // find user by id

    res.status(200).json({
        message: 'GET from /:id',
        metadata: {
            hostname: req.hostname,
            method: req.method,
            params: id
        },
        data: findUser // variable with filtered user here from array
    });
})

router.post('/', (req, res) => {
    // console.log(req.body);
    const { data } = req.body;
    res.status(200).json({
        message: "POST from /api/users",
        data, // if key value pairs the same, use same keyword
        metadata: {
            hostname: req.hostname,
            method: req.method
        },
    })
})

module.exports = router; // export app, used in server.js file 