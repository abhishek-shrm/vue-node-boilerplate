var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var expressValidator = require('express-validator');
var fileUpload = require('express-fileupload');

//Init app
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(cors());

require('dotenv').config();

//Connect to DB
mongoose.connect(process.env.mongoURI, {
  useNewUrlParser: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

//Routes
var Home=require('./routes/home');

//Middlewares
app.use('/',Home);

var port = 3000;
app.listen(process.env.PORT || port, () => {
  console.log('Server started on port ' + port)
});