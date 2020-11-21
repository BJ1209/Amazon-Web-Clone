import React from "react";
import "./ToastComponent.css";
function ToastComponent({ title, imageUrl }) {
  return (
    <div className="toastComponent">
      <img src={imageUrl} alt={title} className="toastComponent__image" />
      <p>
        <span className="toastComponent__title">{title}</span>
        <span> has been added to your basket</span>
      </p>
    </div>
  );
}

export default ToastComponent;
