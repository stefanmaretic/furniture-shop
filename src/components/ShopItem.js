import { useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../App";
import "./ShopItem.css";

export function ShopItem({ shopItem }) {
  const [, { addToCart }] = useContext(StateContext);
  return (
    <div className="shop-item-container">
      <div className="shop-item-image-container">
        <img
          className="shop-item-image"
          src="https://via.placeholder.com/300"
          alt=""
        />
      </div>
      <div className="shop-item-content">
        <h3 className="shop-item-product-name">
          <Link to={`/products/${shopItem.slug}`}>{shopItem.name}</Link>
        </h3>
        <p className="shop-item-product-description">{shopItem.description}</p>
        <button
          type="button"
          className="primary-btn"
          onClick={() => addToCart(shopItem)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
