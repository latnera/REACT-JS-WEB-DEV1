import React from "react";
import Movie from "./Movie";
import axios from "axios";
import CreateMovie from "./CreateMovie";

class App extends React.Component {
   state = {
      movies: [],
      movie: { name: "", genres: "", rating: 0 },
   };

   changeProperty = (event) => {
      let copyMovie = { ...this.state.movie };
      copyMovie[event.target.name] = event.target.value;
      this.setState({ movie: copyMovie });
   };

   saveProperty = () => {
      axios.post("/movies", this.state.movie).then((res) => {
         console.log(res.data);
      });
   };

   componentDidMount() {
      axios
         .get("/movies")
         .then((res) => {
            this.setState({ movies: res.data });
         })
         .catch((err) => console.log(err));
   }

   render() {
      return (
         <div>
            {this.state.movies.map((item) => {
               return <Movie name={item.name} genre={item.genres} rating={item.rating}></Movie>;
            })}

            <CreateMovie
               name={this.state.movie.name}
               genre={this.state.movie.genres}
               rating={this.state.movie.rating}
               changeProperty={(event) => this.changeProperty(event)}
               saveProperty={this.saveProperty}></CreateMovie>
         </div>
      );
   }
}

export default App;
