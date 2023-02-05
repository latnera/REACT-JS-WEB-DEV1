import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function DataPlusMinus() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1> {count}</h1>

      <button
        onClick={() => {
          dispatch({ type: "Increment" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Decrement" });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
}
