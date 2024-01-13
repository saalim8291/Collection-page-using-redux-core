import { combineReducers } from "redux";
import { productReducer, viewProductDetailsReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  viewProductDetails: viewProductDetailsReducer,
});

export default reducers;
