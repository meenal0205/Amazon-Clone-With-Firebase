import React from "react";
import "./CheckOut.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckOutProduct from "./CheckOutProduct";

function CheckOut() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81P45-grDOL._SX3000_.jpg"
          alt=""
        ></img>
        <div>
          <h3>Hello {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default CheckOut;
