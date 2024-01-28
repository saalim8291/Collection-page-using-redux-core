import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  viewProduct: {},
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case ActionTypes.VIEW_PRODUCT:
      return {
        ...state,
        viewProduct: action.payload,
      };

    case ActionTypes.REMOVE_VIEWED_PRODUCT:
      return {
        ...state,
        viewProduct: action.payload,
      };

    default:
      return state;
  }
};
