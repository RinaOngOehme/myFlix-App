const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uuid = require('uuid');
const cors = require('cors');
app.use(cors());

const { check, validationResult } = require('express-validator');

const mongoose = require('mongoose');
const Models = require('./models.js');

const Movies = Models.Movie;
const Users = Models.User;


const passport = require('passport');
require('./passport');

mongoose.connect(process.env.CONNECTION_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());
let auth = require('./auth')(app);

//use myLogger to log requests
let myLogger = (req, res, next) => {
  console.log(req.url);
  next();
};
app.use(myLogger);

//Get requests
app.get('/', (req, res) => {
  res.send('Welcome to myFlix Database!');
});

/**
 * Get all movies
 * @method GET
 * @param {string} endpoint - endpoint to fetch movies. "url/movies"
 * @returns {object} - returns the movie object
 */
app.get('/movies', passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.find()
    .then((movies) => {
      res.status(201).json(movies);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error: ' + error);
    });
});

/**
 * Get single movie
 * @method GET
 * @param {string} endpoint - endpoint to fetch movie. "url/movies/:Title"
 * @returns {object} - returns the movie object
 */
app.get('/movies/:Title', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  Movies.findOne({
    Title: req.params.Title
  })
    .then((movies) => {
      res.json(movies);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

/**
 * Get genre
 * @method GET
 * @param {string} endpoint - endpoint to fetch genre. "url/movies/genre/:Genre"
 * @returns {object} - returns the genre object
 */
app.get('/movies/genre/:Genre', passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.findOne({ 'Genre.Name': req.params.Genre })
    .then((movie) => {
      res.json(movie.Genre.Description);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

/**
 * Get director
 * @method GET
 * @param {string} endpoint - endpoint to fetch director. "url/movies/director/:Director"
 * @returns {object} - returns the director object
 */
app.get('/movies/director/:Director', passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.findOne({ 'Director.Name': req.params.Director })
    .then((movie) => {
      res.json(movie.Director);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

/**
 * Add a User
 * @method post
 * @param {integer} ID
 * @param {string} Username
 * @param {string} Password
 * @param {string} Email
 * @param {date} Birthday
 * @returns {object} - returns user object
 */
app.post('/users', [check('Username', 'Username is required').isLength({ min: 6 }),
check('Username', 'Username contains non alphanumeric characters - not allowed.').isAlphanumeric(),
check('Password', 'Password is required').not().isEmpty(),
check('Email', 'Email does not appear to be valid').isEmail()], (req, res) => {
  // check the validation object for errors
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()
    });
  }
  let hashedPassword = Users.hashPassword(req.body.Password);
  Users.findOne({
    Username: req.body.Username
  })
    .then((user) => {
      if (user) {
        return res.status(400).send(req.body.Username + ' already exists');
      } else {
        Users
          .create({
            Username: req.body.Username,
            Password: hashedPassword,
            Email: req.body.Email,
            Birthday: req.body.Birthday
          })
          .then((user) => {
            res.status(201).json(user);
          })
          .catch((error) => {
            console.error(error);
            res.status(500).send('Error: ' + error);
          });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error: ' + error);
    });
});


/**
 * Update a User
 * @method put
 * @param {string} Username
 * @param {string} Password
 * @param {string} Email
 * @param {date} Birthday
 * @returns {object} - returns user object
 */
app.put('/users/:Username', [check('Username', 'Username is required').isLength({ min: 6 }),
check('Username', 'Username contains non alphanumeric characters - not allowed.').isAlphanumeric(),
check('Password', 'Password is required').not().isEmpty(),
check('Email', 'Email does not appear to be valid').isEmail()], passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  // check the validation object for errors
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()
    });
  }
  let hashedPassword = Users.hashPassword(req.body.Password);
  Users.findOneAndUpdate({
    Username: req.params.Username
  }, {
    $set: {
      Username: req.body.Username,
      Password: hashedPassword,
      Email: req.body.Email,
      Birthday: req.body.Birthday
    }
  }, {
    new: true
  }, // This line makes sure that the updated document is returned
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
      } else {
        res.json(updatedUser);
      }
    });
});


/**
 * Add a movie to user's favorite
 * @method post
 * @param {string} Username
 * @param {string} Password
 * @param {string} MovieID
 * @returns {object} - returns user object
 */
app.post('/users/:Username/Movies/:MovieID', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  Users.findOneAndUpdate({
    Username: req.params.Username
  }, {
    $push: {
      FavoriteMovies: req.params.MovieID
    }
  }, {
    new: true
  }, // This line makes sure that the updated document is returned
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
      } else {
        res.json(updatedUser);
      }
    });
});

/**
 * Delete a movie to user's favorite
 * @method delete
 * @param {string} Username
 * @param {string} Password
 * @param {string} MovieID
 * @returns {object} - returns user object
 */
app.delete('/users/:Username/Movies/:MovieID', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  Users.findOneAndUpdate({
    Username: req.params.Username
  }, {
    $pull: {
      FavoriteMovies: req.params.MovieID
    }
  }, {
    new: true
  }, // This line makes sure that the updated document is returned
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
      } else {
        res.json(updatedUser);
      }
    });
});

/**
 * Delete a User by username
 * @method delete
 * @param {string} Username
 * @return {string} message that user was deleted or not found
 */
app.delete('/users/:Username', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  Users.findOneAndRemove({
    Username: req.params.Username
  })
    .then((user) => {
      if (!user) {
        res.status(400).send(req.params.Username + ' was not found');
      } else {
        res.status(200).send(req.params.Username + ' was deleted.');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});


/**
 * Get a User by username
 * @method get
 * @param {string} Username
 * @returns {object} - returns user object
 */
app.get('/users/:Username', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  Users.findOne({
    Username: req.params.Username
  })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

//use requests
app.use('/', express.static('public'));
app.use('/documentation', express.static('public/documentation.html'));

// listen for requests
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log('Listening on Port ' + port);
});

//error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error!');
});
