import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => console.error(err, "err"));

      dispatch(setProducts(response.data));
    };

    fetchProducts();
  });
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
