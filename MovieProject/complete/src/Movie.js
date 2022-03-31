import React from "react";

function Movie(props) {
   return (
      <div>
         <h4>
            {props.name} {props.genre} {props.rate}
         </h4>

         <input type='text' placeholder='Name Update' onChange={props.updateName} />
         <input type='text' placeholder='Genre Update' onChange={props.updateGenre} />
         <input type='text' placeholder='Rate Update' onChange={props.updateRate} />
         <button onClick={props.deleteBtn}>Delete</button>
         <button onClick={props.favorMovies}>AddToFavorite</button>
      </div>
   );
}

export default Movie;
