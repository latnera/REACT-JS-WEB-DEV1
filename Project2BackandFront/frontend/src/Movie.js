import React from "react";

class Movie extends React.Component {
  render() {
    return (
      <div>
        <h2>
          {this.props.name} {this.props.genre} {this.props.rating}
          <button onClick={this.props.deleteMovie}>Delete</button>
        </h2>

        {/* <input type='text' placeholder='Enter new name' onChange={this.props.changeName} /> */}
      </div>
    );
  }
}
export default Movie;

//! Another way of if else condition. syntax=(Condition ? statement if true : statement if false)
