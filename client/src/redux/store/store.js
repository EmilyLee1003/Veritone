import { createStore } from "redux";
import rootreducer from "../reducers/rootreducer";
const dummyReducer = () => {
  return console.log("yes redux");
};

const store = createStore(rootreducer);

export default store;
