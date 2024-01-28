import { ActionTypes } from "../constants/action-types";
import productsApi from "../../apis/productsApi";

export const viewProductDetails = (productDetails) => {
  return {
    type: ActionTypes.VIEW_PRODUCT_DETAILS,
    payload: productDetails,
  };
};

// short form
export const fetchProducts = () => async (dispatch, getState) => {
  const { data } = await productsApi.get("/products");

  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: data });
};

// long form
// export const fetchProducts = () => {
//   return async (dispatch, getState) => {
//     const { data } = await productsApi.get("/products");

//     dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: data });
//   };
// };

export const viewProduct = (id) => async (dispatch, getState) => {
  const { data } = await productsApi.get(`/products/${id}`);

  dispatch({ type: ActionTypes.VIEW_PRODUCT, payload: data });
};

export const removeViewedProduct = () => {
  return {
    type: ActionTypes.REMOVE_VIEWED_PRODUCT,
    payload: {},
  };
};
