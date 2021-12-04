import { useContext } from "react";
import { StateContext } from "../App";
import { CartItem } from "../components/CartItem";

export function Cart() {
  const [{ cart }] = useContext(StateContext);

  return (
    <div className="container">
      <div className="cart-items-container">
        <div className="cart-items-list">
          {cart.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
      </div>
      <div className="checkout-form-container"></div>
    </div>
  );
}
