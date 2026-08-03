import React, { use } from "react";
import { useState, useContext } from "react";
import { watchlist } from "../data/data";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz, Spa } from "@mui/icons-material";
import { Tooltip, Grow } from "@mui/material";
import { GeneralContext } from "./GeneralContextProvider";
import { DoughnutChart } from "./DoughnutChart";

const WatchList = () => {
  const labels = watchlist.map((subArr) => subArr["name"]);
  const data = {
  labels,
  datasets: [
    {
      label: 'Price',
      data: watchlist.map((stock) => stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return (
            <WatchListItem key={stock.name} stock={stock} index={index} />
          )
        })}
      </ul>
      <DoughnutChart data={data}/>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock, index }) => {
  const [showMouseListAction, setShowMouseListAction] = useState(false);

  const handleMouseEnter = () => {
    setShowMouseListAction(true);
  }

  const handleMouseLeave = () => {
    setShowMouseListAction(false);
  }

  

  return (
    <>
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span className="percent">{stock.percent}</span>
          {
            stock.isDown ? <KeyboardArrowDown className="down" /> : <KeyboardArrowUp className="up" />
          }
          <span className={stock.isDown ? "down" : "up"}>{stock.price}</span>
        </div>
      </div>
      {showMouseListAction && <WatchListAction uid={stock.name} price={stock.price}/> }
    </li>
    </>
  );
}

const WatchListAction = ({uid, price}) => {
  const generaleContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generaleContext.openBuyWindow(uid, price)
  }
  const handleSellClick = () => {
    generaleContext.openSellWindow(uid, price)
  }
  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy" placement="top" TransitionComponent={Grow}>
          <button className="buy" onClick={handleBuyClick}>Buy</button>
        </Tooltip>
        <Tooltip title="Sell" placement="top" TransitionComponent={Grow}>
          <button className="sell" onClick={handleSellClick}>Sell</button>
        </Tooltip>
        <Tooltip title="Chart" placement="top" TransitionComponent={Grow}>
          <button className="action"><BarChartOutlined className="icon" /></button>
        </Tooltip>
        <Tooltip title="More" placement="top" TransitionComponent={Grow}>
          <button className="action"><MoreHoriz className="icon" /></button>
        </Tooltip>
      </span>
    </span>
  )
}