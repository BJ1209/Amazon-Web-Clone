import React from "react";
import { useStateValue } from "../context/StateProvider";
import "./Product.css";

function Product({ id, title, price, rating, imageUrl }) {
  const [, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        imageUrl: imageUrl,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__stars">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img className="product__image" src={imageUrl} alt={title} />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
