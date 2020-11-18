import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import "./Checkout.css";
import { useStateValue } from "../context/StateProvider";
import { Link } from "react-router-dom";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Amazon Ad"
        />
        <h2 className="checkout__title">Your Shopping Basket</h2>
        {basket?.length !== 0 ? (
          basket?.map(({ id, imageUrl, title, price, rating }) => (
            <CheckoutProduct
              key={id}
              id={id}
              imageUrl={imageUrl}
              title={title}
              price={price}
              rating={rating}
            />
          ))
        ) : (
          <div className="checkout_emptyBasket">
            <img
              src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
              alt="Empty Basket"
            />
            <div className="checkout__basketInfo">
              <h1>Your Amazon Basket is empty</h1>
              <Link to="/">Shop Today's deals</Link>
            </div>
          </div>
        )}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
