import { useContext } from "react";
import { StateContext } from "../App";
import { Header } from "../components/Header";
import { ShopItem } from "../components/ShopItem";
import "./Storefront.css";

export function Storefront() {
  const [{ shopItems }] = useContext(StateContext);

  return (
    <>
      <Header />
      <div className="container">
        <div className="shop-items-list">
          {shopItems.map((shopItem) => (
            <ShopItem
              key={shopItem.id}
              shopItem={shopItem}
            />
          ))}
        </div>
      </div>
    </>
  );
}
