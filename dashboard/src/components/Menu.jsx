import React, { use } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropDown, setIsProfileDropDown] = useState(false);

  const handleSelectedMenu = (index) => {
    setSelectedMenu(index);
  }

  const handleProfileDropDown = () => {
    setIsProfileDropDown(!isProfileDropDown);
  }

  const menuClass = "menu";
  const active = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to={"/"} onClick={() => handleSelectedMenu(0)} style={{textDecoration:"none"}}>
              <p className={selectedMenu == 0? active : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to={"/orders"} onClick={() => handleSelectedMenu(1)} style={{textDecoration:"none"}}>
              <p className={selectedMenu == 1? active : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to={"/holdings"} onClick={() => handleSelectedMenu(2)} style={{textDecoration:"none"}}>
              <p className={selectedMenu == 2? active : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to={"/positions"} onClick={() => handleSelectedMenu(3)} style={{textDecoration:"none"}}>
              <p className={selectedMenu == 3? active : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to={"/funds"} onClick={() => handleSelectedMenu(4)} style={{textDecoration:"none"}}>
              <p className={selectedMenu == 4? active : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link to={"/apps"} onClick={() => handleSelectedMenu(5)} style={{textDecoration:"none"}}>
              <p className={selectedMenu == 5? active : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
