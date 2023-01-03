import "./App.css";
import Data from "./Data";

function App() {
  const nam = "Shibiru";
  const age = 20;

  return (
    <div className="App">
      <Data name={nam} age={age}></Data>
    </div>
  );
}

export default App;
