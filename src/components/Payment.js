import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";
import "./Payment.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (
          <Link to="/checkout">
            {basket?.length} {basket?.length === 1 ? "item" : "items"}
          </Link>
          )
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email} </p>
            <p>Street XYZ</p>
            <p>London, UK</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment__items">
            <FlipMove>
              {basket?.map(({ id, imageUrl, title, price, rating }) => (
                <CheckoutProduct
                  key={id}
                  id={id}
                  imageUrl={imageUrl}
                  title={title}
                  price={price}
                  rating={rating}
                />
              ))}
            </FlipMove>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <div className="payment__method">
              <input type="radio" name="method" /> <p>UPI</p>
            </div>
            <div className="payment__method">
              <input type="radio" name="method" /> <p>EMI</p>
            </div>
            <div className="payment__method">
              <input type="radio" name="method" /> <p>Pay on Delivery</p>
            </div>
            <button className="subtotal__button">Place Your Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
