import React, { useState, useContext } from "react";
import axios from "axios";
import { GeneralContext } from "./GeneralContextProvider";
import "./BuySellActionWindow.css";
import { PriceChange } from "@mui/icons-material";

const BuyActionWindow = ({ uid, price }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(price);
  const { closeBuyWindow } = useContext(GeneralContext);

  console.log(price);
  const handleBuyClick = async () => {
    try {
      axios.post("http://localhost:3000/addOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        Mode: "BUY",
      });

      closeBuyWindow();
    }  catch(e) {
      console.log("error: "+{e});
    }
  }

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
      <h3>Buy</h3>
      <h4>{uid}</h4>
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity ?? ""}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice ?? ""}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required {(stockQuantity*stockPrice).toFixed(2)}</span>
        <div>
          <button type="button" className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button type="button" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;