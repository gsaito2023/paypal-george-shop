import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import OrderConfirmation from "./components/OrderConfirmation";

function App() {
  return (
    <PayPalScriptProvider
      option={{
        "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
      }}
    >
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Checkout />} />
            <Route path="/Order/:orderNumber" element={<OrderConfirmation />} />
          </Routes>
        </Router>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
