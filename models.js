const mongoose = require('mongoose');

let movieSchema = mongoose.Schema ({
  Title: {type: String, required: true},
  Description: {type: String, required: true},
  Genre: {
    Name: String,
    Description: String
  },
  Director: {
    Name: String,
    Bio: String,
    Birthyear: Date,
    Deathyear: Date
  },
  Actors: [String],
  ImageURL: String,
  Featured: Boolean
});

let userSchema = mongoose.Schema ({
  Username: {type: String, required: true},
  Password: {type: String, required: true},
  Email: {type: String, required: true},
  Birthday: Date,
  FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie'}]
});

let Movies = mongoose.model('Movies', movieSchema);
let Users = mongoose.model('Users', userSchema);

module.exports.Movies = Movies;
module.exports.Users = Users;