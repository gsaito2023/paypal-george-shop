import React from "react";
import "./style.css";
import ProductImage from "../images/product.png";
import PaypalCheckoutButton from "./PaypalCheckoutButton";

export default function Checkout() {
  const product = {
    description: "Learn how to build a website with REACT JS",
    price: 29,
  };
  return (
    <div className="checkout">
      <h1>Paypal Checkout</h1>
      <p className="checkout-title">Reactjs Essential Training Course</p>
      <p className="checkout-description">
        Learn how to build websites using React JS
      </p>
      <h1 className="checkout-price">$29</h1>
      <img className="product-image" src={ProductImage} alt="Product Image" />
      <div className="separator"></div>
      <div className="paypal">
        <p className="checkout-title">PAY WITH PAYPAL</p>
        <div className="paypal-button-container">
          <PaypalCheckoutButton product={product} />
        </div>
      </div>
    </div>
  );
}
