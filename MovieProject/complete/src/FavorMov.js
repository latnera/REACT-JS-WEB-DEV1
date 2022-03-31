function FavoriteMovie(props) {
   return (
      <div>
         <h4>
            {props.name} {props.genre} {props.rate}
         </h4>
         <button onClick={props.deleteFavor}>DeleteFavorite</button>
      </div>
   );
}

export default FavoriteMovie;
