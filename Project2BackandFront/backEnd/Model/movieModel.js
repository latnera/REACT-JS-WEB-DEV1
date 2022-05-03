const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
   name: String,
   genres: String,
   rating: Number,
});

//MovieModel=> is like a class. from that we can create obj. its constructor is movieSchema
const MovieModel = mongoose.model("MovieCollectionName", movieSchema);

module.exports = MovieModel;
