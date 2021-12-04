import { useContext } from "react";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import { StateContext } from "../App";

export function Product() {
  const params = useParams();
  const [state, handlers] = useContext(StateContext);
  const { shopItems } = state;

  function getShopItemBySlug(slug) {
    return shopItems.find((shopItem) => shopItem.slug === slug);
  }

  const product = getShopItemBySlug(params.productId);

  return (
    <div className="container">
      <Link to="/">Go back home</Link>
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </div>
      <button
        type="button"
        className="primary-btn"
        onClick={() => handlers.addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
