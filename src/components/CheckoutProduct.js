import React, { forwardRef } from "react";
import { useStateValue } from "../context/StateProvider";
import "./CheckoutProduct.css";

const CheckoutProduct = forwardRef(({ id, imageUrl, title, price, rating }, ref) => {
  const [, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div ref={ref} className="checkoutProduct">
      <img className="checkoutProduct__image" src={imageUrl} alt={title} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__stars">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button className="checkoutProduct__btn" onClick={removeFromBasket}>
          Remove From Basket
        </button>
      </div>
      <p className="checkoutProduct__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
    </div>
  );
});

export default CheckoutProduct;
