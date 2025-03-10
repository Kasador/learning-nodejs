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

router.get('/', (req, res) => {
    res.status(200).json({ // get status 200 - success and return data into JSON
        message: `Loaded ${users.length} users.`,
        metadata: {
            hostname: req.hostname, 
            method: req.method
        },
        data: users
    });
});

// GET METHOD BY ID >>> 
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const findUser = users.find(user => user.id === parseInt(id)); // find user by id

    if (!findUser) {
        return res.status(404).json({ // 404 (not found status)
            message: 'User not found. Try again.',
            metadata: {
                hostname: req.hostname,
                method: req.method,
                params: id
            }
        });
    }

    res.status(200).json({ // 200 (success status)
        message:`Found user ${findUser.name} of id: ${findUser.id}.`,
        metadata: {
            hostname: req.hostname,
            method: req.method,
            params: id
        },
        data: findUser // variable with filtered user here from array
    });
})

// POST METHOD W/ NEW ID >>>
router.post('/', (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({ // 400 (bad request status)
            message: 'Please provide name and age.',
            metadata: {
                hostname: req.hostname,
                method: req.method
            }
        });
    }

    // REF: https://stackoverflow.com/questions/4020796/finding-the-max-value-of-a-property-in-an-array-of-objects
    const highestId = Math.max(...users.map(user => user.id), 0); // highest id value in the array // error handling so no repeats in ids

    const createUser = {
        id: highestId + 1, // highest value of id +1
        name,
        age: parseInt(age)
    };

    users.push(createUser); // push to the array so when you do another get, it will show all users with the new one

    res.status(200).json({ // 200 (success status)
        message: 'New user added sucessfully.',
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
        data: createUser // variable with filtered user here from array
    });
});

// DELETE METHOD BY ID >>>
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const findUser = users.find(user => user.id === parseInt(id)); // find user by id

    if (!findUser) {
        return res.status(404).json({ // 404 (not found status)
            message: 'User not found. Try again.',
            metadata: {
                hostname: req.hostname,
                method: req.method,
                params: id
            }
        });
    }

    // REF: https://stackoverflow.com/questions/39286008/deleting-a-user-in-an-array
    users.splice(users.indexOf(findUser), 1); // delete user by id

    res.status(200).json({ // 200 (success status)
        message:`User ${findUser.name} of id: ${findUser.id} has been deleted.`,
        metadata: {
            hostname: req.hostname,
            method: req.method,
            params: id
        },
        data: findUser // variable with filtered user here from array
    });
})

// UPDATE METHOD BY ID >>>
router.put('/:id', (req, res) => { 
    const { id } = req.params;
    const findUser = users.find(user => user.id === parseInt(id)); // find user by id

    if (!findUser) {
        return res.status(404).json({ // 404 (not found status)
            message: 'User not found. Try again.',
            metadata: {
                hostname: req.hostname,
                method: req.method,
                params: id
            }
        });
    }

    // REF: https://stackoverflow.com/questions/37585309/replacing-objects-in-array
    users.map(user => {
        if (user.id === parseInt(id)) {
            user.name = req.body.name;
            user.age = parseInt(req.body.age);
        }
    });

    res.status(200).json({ // 200 (success status)
        message:`User of id: ${findUser.id} has been updated.`,
        metadata: {
            hostname: req.hostname,
            method: req.method,
            params: id
        },
        data: findUser // variable with filtered user here from array
    });
})

module.exports = router; // export app, used in server.js file 