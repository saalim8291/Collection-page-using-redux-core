import { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
