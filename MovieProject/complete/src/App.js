import React from "react";
import Movie from "./Movie";
import AddNewMovie from "./AddNewMovie";
import FavoriteMovie from "./FavorMov";

class App extends React.Component {
   state = {
      movies: [
         { id: 1, name: "Ela", rates: 4.7, genres: "haadha ormaa" },
         { id: 2, name: "Sakala", rates: 4.6, genres: "Jalaala" },
         { id: 3, name: "Guma", rates: 4.5, genres: "Ari bahiinsa" },
         { id: 4, name: "Gobaze", rates: 4.4, genres: "Qubata" },
      ],
      isvisible: true,
      AddNewMovie: { name: " ", rates: 0, genres: " " },
      FavoriteMovies: [],
   };

   AddFavorMovies = (id) => {
      let result = this.state.movies.filter((m) => m.id === id);

      this.setState({ FavoriteMovies: this.state.FavoriteMovies.concat(result) });
   };

   AddName = (nameEvent) => {
      this.setState({
         AddNewMovie: {
            name: nameEvent.target.value,
            rates: this.state.AddNewMovie.rates,
            genres: this.state.AddNewMovie.genres,
         },
      });
   };
   AddGenre = (genreEvent) => {
      this.setState({
         AddNewMovie: {
            name: this.state.AddNewMovie.name,
            genres: genreEvent.target.value,
            rates: this.state.AddNewMovie.genres,
         },
      });
   };

   AddRate = (rateEvent) => {
      this.setState({
         AddNewMovie: {
            name: this.state.AddNewMovie.name,
            rates: rateEvent.target.value,
            genres: this.state.AddNewMovie.genres,
         },
      });
   };

   saveMethod = () => {
      let result = this.state.movies.concat(this.state.AddNewMovie);

      this.setState({
         movies: result,
      });
   };

   DeleteMovie = (id) => {
      this.setState({
         movies: this.state.movies.filter((movie) => {
            if (movie.id === id) {
               return null;
            } else {
               return movie;
            }
         }),
      });
   };
   DeleteFavorMovie = (id) => {
      this.setState({
         FavoriteMovies: this.state.FavoriteMovies.filter((movie) => {
            if (movie.id === id) {
               return null;
            } else {
               return movie;
            }
         }),
      });
   };

   updateName = (id, nameEvent) => {
      let result = this.state.movies.map((movie) => {
         if (movie.id === id) {
            let copy = { ...movie };
            copy.name = nameEvent.target.value;
            return copy;
         } else {
            return movie;
         }
      });
      this.setState({ movies: result });
   };
   updateRate = (id, rateEvent) => {
      let result = this.state.movies.map((movie) => {
         if (movie.id === id) {
            let copy = { ...movie };
            copy.rates = rateEvent.target.value;
            return copy;
         } else {
            return movie;
         }
      });
      this.setState({ movies: result });
   };

   updateGenre = (id, genreEvent) => {
      let result = this.state.movies.map((movie) => {
         if (movie.id === id) {
            let copy = { ...movie };
            copy.genres = genreEvent.target.value;
            return copy;
         } else {
            return movie;
         }
      });
      this.setState({ movies: result });
   };

   showHide = () => {
      this.setState({ isvisible: !this.state.isvisible });
   };

   render() {
      let favors = this.state.FavoriteMovies.map((movie) => {
         return (
            <FavoriteMovie
               name={movie.name}
               rate={movie.rates}
               genre={movie.genres}
               deleteFavor={() => {
                  this.DeleteFavorMovie(movie.id);
               }}></FavoriteMovie>
         );
      });

      let moviesList = null;
      if (this.state.isvisible) {
         moviesList = this.state.movies.map((movie) => {
            return (
               <Movie
                  name={movie.name}
                  rate={movie.rates}
                  genre={movie.genres}
                  updateName={(event) => {
                     this.updateName(movie.id, event);
                  }}
                  updateGenre={(event) => {
                     this.updateGenre(movie.id, event);
                  }}
                  updateRate={(event) => {
                     this.updateRate(movie.id, event);
                  }}
                  deleteBtn={() => {
                     this.DeleteMovie(movie.id);
                  }}
                  favorMovies={() => {
                     this.AddFavorMovies(movie.id);
                  }}></Movie>
            );
         });
      }
      return (
         <div>
            <button onClick={this.showHide}>Show/Hide</button>
            <h1>Movie List</h1>

            {moviesList}

            <h1>Add New Movie To The List</h1>
            <AddNewMovie
               AddName={(event) => {
                  this.AddName(event);
               }}
               AddGenre={(event) => {
                  this.AddGenre(event);
               }}
               AddRate={(event) => {
                  this.AddRate(event);
               }}
               saveMethod={this.saveMethod}></AddNewMovie>
            <h1>Favorite movies</h1>
            {favors}
         </div>
      );
   }
}

export default App;
