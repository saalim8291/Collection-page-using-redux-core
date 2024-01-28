import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeViewedProduct,
  viewProduct,
} from "../redux/actions/productActions";

const ProductDetail = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.viewProduct);

  const { image, title, price, category, description } = product;

  useEffect(() => {
    if (productId) dispatch(viewProduct(productId));

    return () => {
      dispatch(removeViewedProduct());
    };
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="middle aligned row">
              <div
                className="column lp"
                style={{ borderRight: "2px solid rgba(34,36,38,.15)" }}
              >
                <img src={image} alt="" className="ui fluid image" />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a href="" className="ui teal tag label">
                    ${price}
                  </a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
