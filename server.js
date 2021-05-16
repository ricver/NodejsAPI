const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 4000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/db.config.js');
const mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
//const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URI;
//"mongodb+srv://***:***@thproject.iul3v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Connecting to the database
//mongoose.connect(dbConfig.url, {
//useNewUrlParser: true
//}).then(() => {
//  console.log("Successfully connected to the database");
//}).catch(err => {
//  console.log('Could not connect to the database.', err);
//  process.exit();
//});

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
}).catch(err => {
  console.log('Could not connect to the database.', err);
  process.exit();
});

//app.listen(port, () => {
//    console.log(`Server is running on port: ${port}`);
//});


// define a root/default route
//app.get('/', (req, res) => {
//   res.json({"message": "Hello World"});
//});
//app.get('/', function(req, res){
//  res.sendfile('default.html', { root: __dirname + "/relative_path_of_file" } );
//});
app.get('/', function(req, res){
    res.redirect('default.html');
});

// Require Users routes
const userRoutes = require('./src/routes/user.routes')
// using as middleware
app.use('/api/users', userRoutes)

// listen for requests
app.listen(port, () => {
   console.log(`Node server is listening on port ${port}`);
});