import React, { useContext } from "react";
import { AppContext } from "./App";

export default function ConsumComp() {
  const context = useContext(AppContext);

  return (
    <div>
      <h1>{context.state}</h1>
      <button
        onClick={() => {
          context.dispatch({ type: "Increment" });
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          context.dispatch({ type: "Decrement" });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          context.dispatch({ type: "Reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
}
