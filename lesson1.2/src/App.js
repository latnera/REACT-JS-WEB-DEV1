import React, { createContext, useReducer } from "react";
import ConsumComp from "./ConsumComp";

let initialState = 0;
const reducer = (prvState, action) => {
  if (action.type === "Increment") {
    return prvState + 1;
  }
  if (action.type === "Decrement") {
    return prvState - 1;
  }
  if (action.type === "Reset") {
    return initialState;
  }
};

export const AppContext = createContext();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <AppContext.Provider value={{ state: state, dispatch: dispatch }}>
        <ConsumComp />
      </AppContext.Provider>
    </div>
  );
}
