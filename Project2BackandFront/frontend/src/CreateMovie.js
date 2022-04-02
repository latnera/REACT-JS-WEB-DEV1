import React from "react";

class CreateMovie extends React.Component {
   render() {
      return (
         <div>
            <h2>
               {this.props.name} {this.props.genre} {this.props.rating}
            </h2>

            <input
               type='text'
               placeholder='Enter new name'
               name='name'
               onChange={this.props.changeProperty}
            />
            <input
               type='text'
               placeholder='Enter new genre'
               name='genres'
               onChange={this.props.changeProperty}
            />
            <input
               type='text'
               placeholder='Enter new rating'
               name='rating'
               onChange={this.props.changeProperty}
            />
            <button onClick={this.props.saveProperty}>Save</button>
         </div>
      );
   }
}

export default CreateMovie;
