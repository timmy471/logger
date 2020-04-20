import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialStore = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialStore,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;