import React from "react";
import "./Product.css";

function product({ title, price, rating, imageUrl }) {
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
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className="product__image" src={imageUrl} alt={title} />
      <button>Add To Basket</button>
    </div>
  );
}

export default product;
