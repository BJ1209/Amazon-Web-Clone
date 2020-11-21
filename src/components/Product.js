import React from "react";
import { useStateValue } from "../context/StateProvider";
import "./Product.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastComponent from "./ToastComponent";

function Product({ id, title, price, rating, imageUrl }) {
  const [, dispatch] = useStateValue();

  toast.configure();
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
  const notify = () => {
    toast.info(<ToastComponent title={title} imageUrl={imageUrl} />, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      pauseOnFocusLoss: true,
    });
  };
  const tasks = () => {
    addToBasket();
    notify();
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
      <button onClick={tasks}>Add To Basket</button>
    </div>
  );
}

export default Product;
