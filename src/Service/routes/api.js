// const express = require('express');
// const router = express.Router();
// const MongoClient = require('mongodb').MongoClient;
// const ObjectID = require('mongodb').ObjectID;

// // Connect
// const connection = (closure) => {
//     return MongoClient.connect('mongodb://localhost:27017/node-demo', (err, db) => {
//         if (err) return console.log(err);

//         closure(db);
//     });
// };

// // Error handling
// const sendError = (err, res) => {
//     response.status = 501;
//     response.message = typeof err == 'object' ? err.message : err;
//     res.status(501).json(response);
// };

// // Response handling
// let response = {
//     status: 200,
//     data: [],
//     message: null
// };

// // Get users
// router.get('/users', (req, res) => {
//     MongoClient.connect('mongodb://localhost', (err, client) => {
//         var db=client.db('node-demo')
//         db.collection('users')
//             .find()
//             .toArray()
//             .then((users) => {
//                 response.data = users;
//                 res.json(response);
//             })
//             .catch((err) => {
//                 sendError(err, res);
//             });
//     });
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    // return MongoClient.connect('mongodb://mongosql.westus2.cloudapp.azure.com', (err, db) => {
    return MongoClient.connect('mongodb://localhost:27017', (err, db) => {        
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    // MongoClient.connect('mongodb://mongosql.westus2.cloudapp.azure.com', (err, client) => {
    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
        
        var db=client.db('node-demo')
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.get('/books', (req, res) => {
    // MongoClient.connect('mongodb://mongosql.westus2.cloudapp.azure.com', (err, client) => {
    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
        
        var db=client.db('node-demo')
        db.collection('books')
            .find()
            .toArray()
            .then((books) => {
                response.data = books;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;