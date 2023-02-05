const initialState = {
  count: 0
};

const reducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, count: state.count + 1 };
    case "Decrement":
      return { ...state, count: state.count - 1 };
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

export default reducerFunction;
