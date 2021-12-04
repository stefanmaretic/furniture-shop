import { createContext, useReducer, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Storefront } from "./pages/Storefront";
import { Product } from "./pages/Product";
import "./App.css";
import { Cart } from "./pages/Cart";

const defaultState = {
  cart: [],
  shopItems: [
    {
      id: 0,
      slug: "songesand",
      name: "Songesand",
      description:
        "Lorem ipsum dolro sit amet. Ne znam sta jos ide, nije ni bitno",
    },
    {
      id: 1,
      slug: "enhet",
      name: "Enhet",
      description:
        "Lorem ipsum dolro sit amet. Ne znam sta jos ide, nije ni bitno",
    },
    {
      id: 2,
      slug: "polica-za-laptop",
      name: "Polica za laptop",
      description:
        "Lorem ipsum dolro sit amet. Ne znam sta jos ide, nije ni bitno",
    },
    {
      id: 3,
      slug: "hovag",
      name: "Hovag",
      description:
        "Lorem ipsum dolro sit amet. Ne znam sta jos ide, nije ni bitno",
    },
  ],
};

export const StateContext = createContext(defaultState);

export function App() {
  const [state, setState] = useState(defaultState);

  const handlers = {
    addToCart: (shopItem) => {
      setState((prevState) => {
        return {
          ...prevState,
          cart: prevState.cart.concat(shopItem),
        };
      });
    },
    removeFromCart: (id) => {
      const newCartItems = state.cart.filter((cartItem) => cartItem.id !== id);
      setState((prevState) => {
        return {
          ...prevState,
          cart: newCartItems,
        };
      });
    },
  };

  return (
    <StateContext.Provider value={[state, handlers]}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Storefront />} />
          <Route path="/checkout" element={<Cart />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </StateContext.Provider>
  );
}

export default App;
