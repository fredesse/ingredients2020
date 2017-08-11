var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./db/config.js');
var User = require('./db/models/users.js');
var Ingredient = require('./db/models/ingredients.js');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname + '/build/index.html'));
// });


//user creation api route
app.post('/api/signup', function(req, res) {
  var username = req.body.data.username;
  var password = req.body.data.password;

  User.findOne({username: username})
    .exec(function(err, user) {
      if (!user) {
        var newUser = new User({
          username: username,
          password: password
        });
        newUser.save(function(err, newUser) {
          if (err) { res.status(500).send('this is an error'); }
          // TODO: create session
          console.log(`${username} created`);
          res.send(`${username} created`);
        });
      } else {
        console.log(`${username} exists`);
        //res.redirect('/dashboard');
        res.end();
        // TODO: redirect back to the signup page
      }
    });
});

//login route
app.post('/api/login', function(req, res) {
  var username = req.body.data.username;
  var password = req.body.data.password;

  console.log('line 49', username);

  User.findOne({username: username})
    .exec(function(err, user) {
      if (!user) {
        console.log('user does not exist, signup please');
        // res.redirect('/signup');
        res.status(403).send('user does not exist, signup please');
      } else {
        user.comparePassword(password, user.password, function(err, match) {
          if (match) {
            // TODO: take them to dashboard?
            console.log('line 62: success', username);
            res.end();
            // res.redirect('/dashboard');
          } else {
            console.log('line 66: incorrect password');
            //res.redirect('/login');
            res.status(401).send('incorrect password');
          }
        });
      }
    });
});

//ingredient search api route
app.post('/api/ingredients', function(req, res) {
  var ingredient = req.body.data.ingredient;

  Ingredient.findOne({name: ingredient})
    .exec(function(err, ingredientName) {
      //if there is an ingredient, return the document JSON, on the front end, we can extrapolate the name and link!
      if (!ingredientName) {
        res.status(200).send(`${ingredient} not in database`);
      } else {
        res.json(ingredientName);
      }
    });

});

var port = process.env.PORT || 8000;

app.listen(port, function() {
  console.log(`listening on ${port}`);
});

module.exports = app;
