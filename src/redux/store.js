import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import { thunk } from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};
// The initial state serves as the default value for your Redux store before any actions are dispatched and reducers have a chance to run.
// It's an optional parameter in createStore. If provided, it should match the shape of your state object.

const store = createStore(
  reducers, // reducer

  initialState, //initial state

  // If we have a multiple enhancers then we have to use compose. otherwise don't wrap with compose for single enhancer
  compose(
    applyMiddleware(thunk), //enhancer 1
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //enhancer 2
  )

  // This commented is also valid
  // composeEnhancers(applyMiddleware(thunk)) //  enhancers
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
