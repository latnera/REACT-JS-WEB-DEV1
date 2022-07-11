import "./App.css";
import React from "react";
import Movies from "./Movies";

function App() {
  const [state, setState] = React.useState({ isVisible: false });

  let showHideMovieMtd = () => {
    return setState({ isVisible: !state.isVisible });
  };

  return (
    <div className="App">
      <button onClick={showHideMovieMtd}>Show /Hide Movies</button>
      {state.isVisible ? <Movies /> : null}
    </div>
  );
}

export default App;
