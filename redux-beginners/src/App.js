import DataPlusMinus from "./DataPlusMinus";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <h1>{count}</h1>
      <h1>Hello World</h1>
      <DataPlusMinus />
    </div>
  );
}

export default App;
