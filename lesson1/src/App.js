import React, { useReducer, createContext } from "react";
import CompA from "./CompA";

const reducer = (prevstate, action) => {
  if (action.type === "Increment") {
    return prevstate + 1;
  }
  if (action.type === "Decrement") {
    return prevstate - 1;
  }
  if (action.type === "Reset") {
    return initialState;
  }
};

export const AppContext = createContext();
const initialState = 0;

export default function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ count: count, dispatch: dispatch }}>
      <CompA />
    </AppContext.Provider>
  );
}
