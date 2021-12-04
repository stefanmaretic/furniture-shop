import { Link } from "react-router-dom";
import "./Header.css"

export function Header() {
  return (
    <header className="navbar">
      <div className="navbar-right">
        <Link to="/checkout">Checkout</Link>
      </div>
    </header>
  );
}
