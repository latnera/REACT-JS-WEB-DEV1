import React, { useContext } from "react";
import { AppContext } from "./App";

export default function CompA() {
  // const context = useContext(AppContext);
  return (
    <AppContext.Consumer>
      {(value) => (
        <div>
          <h1> {value.count}</h1>

          <button onClick={() => value.dispatch({ type: "Increment" })}>Increment</button>
          <button onClick={() => value.dispatch({ type: "Decrement" })}>Decrement</button>
          <button onClick={() => value.dispatch({ type: "Reset" })}>Reset</button>
        </div>
      )}
    </AppContext.Consumer>
  );
}
