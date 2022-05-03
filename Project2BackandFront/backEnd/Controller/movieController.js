const MovieModel = require("../Model/movieModel");

//create and save movie
exports.create = (req, res) => {
   //validate request
   if (!req.body) {
      res.send({ message: "Movie not found" });
   }
   const { name, genres, rating } = req.body;
   const movie = new MovieModel({ name, genres, rating });
   movie
      .save(movie)
      .then((data) => {
         res.send(data);
      })
      .catch((err) => {
         res.send({
            message: err.message,
         });
      });
};

exports.find = (req, res) => {
   MovieModel.find()
      .then((data) => {
         res.send(data);
      })
      .catch((err) => {
         res.send({ message: err.message });
      });
};

exports.update = (req, res) => {
   if (!req.body) {
      return res.send({ message: "Data to update cannot be empty" });
   }
   const id = req.params.id;
   MovieModel.findByIdAndUpdate(id, req.body)
      .then((data) => {
         res.send(data);
      })
      .catch((err) => {
         res.send({ message: err.message });
      });
};

exports.delete = (req, res) => {
   const id = req.params.id;
   MovieModel.findByIdAndDelete(id)
      .then((data) => {
         if (!data) {
            res.send({ message: `Cannot Delete with ID ${id}. Mybe its wrong id` });
         } else {
            res.send({ message: ` ${data}this user Deleted with ID ${id}.` });
         }
      })
      .catch((err) => {
         res.send({ message: err.message });
      });
};


