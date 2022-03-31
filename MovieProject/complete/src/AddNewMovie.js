import React from "react";

function AddNewMovie(props) {
   return (
      <div>
         <input type='text' placeholder='Add Name' onChange={props.AddName} />
         <input type='text' placeholder='Add Genre' onChange={props.AddGenre} />
         <input type='text' placeholder='Add Rate' onChange={props.AddRate} />
         <button onClick={props.saveMethod}>Save</button>
      </div>
   );
}

export default AddNewMovie;
