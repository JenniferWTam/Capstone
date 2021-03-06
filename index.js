var express = require('express');
var app     = express();
var cors    = require('cors');
var dal     = require('./dal.js'); // add the package connecting to mongodb

// used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

// create user account
app.get('/account/create/:name/:email/:password/:userID', function (req, res) {
    dal.create(req.params.name, req.params.email, req.params.password, req.params.userID)
    .then((user) => {
        console.log(user);
        res.send(user);
    });
});



// Adding the route definition for getting the user info
app.get('/account/getbalance/:userID', function(req, res){
    dal.getBalance(req.params.userID)
        .then((user) => {
            console.log(user);
            res.send(user);
        });
});

// Adding the route definition for updating the user balance
app.get('/account/updateuserbalance/:userID/:newBalance', function(req, res){
    dal.updateUserBalance(req.params.userID, req.params.newBalance)
        .then((result) => {
            console.log(result);
            res.send(result);
        });
});

// Adding the route definition for updating the user activity
app.get('/account/changeactivity/:userID/:depositDateTime/:newBalance', function(req, res){
    dal.updateActivity(req.params.userID, req.params.depositDateTime, req.params.newBalance)
        .then((result) => {
            console.log(result);
            res.send(result);
        });
});

// Adding the route definition for returning all account data (now with the database)
app.get('/account/all', function(req, res){
    dal.all()
        .then((docs) => {
            console.log(docs);
            res.send(docs);
        });
});


const server = app.listen(process.env.PORT || 3000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});
