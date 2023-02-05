import { combineReducers, createStore } from "redux";
import reducerFunction from "./ducks/counter";

const rootReducer = combineReducers({
  counter: reducerFunction
});
const store = createStore(rootReducer);

export default store;

/**
 * 1st create store and pass to index.js
 * combineReducers is collecting all reducer function we have
 * so now store has reducerFunction as argument
 * reducerFunction has obj as argument.
 * counter/reducerFunction has state which is object {count: 0};
 * to get count value we do this steps.
 * const count = useSelector((state) => state.counter.count);
 */
