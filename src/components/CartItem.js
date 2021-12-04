import { useContext } from "react";
import { StateContext } from "../App";
import "./CartItem.css";

export function CartItem({ cartItem }) {
  const [, { removeFromCart }] = useContext(StateContext);

  return (
    <div className="cart-item-container">
      <div className="cart-item-image-container">
        <img
          src="https://via.placeholder.com/300"
          alt=""
          className="cart-item-image"
        />
      </div>
      <div className="cart-item-content">
        <p className="cart-item-title">{cartItem.name}</p>
        <p className="cart-item-description">{cartItem.description}</p>
        <button
          type="button"
          className="primary-btn"
          onClick={() => removeFromCart(cartItem.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
