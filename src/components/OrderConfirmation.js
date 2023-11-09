import React from "react";
import { useParams } from "react-router-dom";

function OrderConfirmation() {
  let orderID = useParams();
  return (
    <div>
      <p>Order Confirmation</p>
      <p>Your order number is: {orderID.orderNumber}</p>
    </div>
  );
}

export default OrderConfirmation;
