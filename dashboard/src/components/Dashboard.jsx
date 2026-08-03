import React, { useContext, useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import GeneralContextProvider from "./GeneralContextProvider";

const FRONTEND_LOGIN_URL =
  "https://zerodhaclonelandingpage.onrender.com/login";

const Dashboard = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const { data } = await axios.get(
          "https://zerodhaclonebackend-8dtk.onrender.com/verify",
          {
            withCredentials: true,
          }
        );

        const { status, user } = data;

        if (status) {
          setUsername(user);
          toast(`Hello ${user}`, {
            position: "top-right",
          });
          setLoading(false);
        } else {
          // window.location.href = FRONTEND_LOGIN_URL;
        }
      } catch (error) {
        console.error(error);
        // window.location.href = FRONTEND_LOGIN_URL;
      }
    };

    verifyCookie();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://zerodhaclonebackend-8dtk.onrender.com/logout",
        {},
        {
          withCredentials: true,
        }
      );

      window.location.href =
        "https://zerodhaclonelandingpage.onrender.com/login";
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <div className="loading-screen">Verifying access...</div>;
  }
  return (
    <div className="dashboard-container">
      <ToastContainer />
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary username={username} />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
        <div >
          <button onClick={handleLogout} className="logout-btn" style={{ padding: "6px 12px", margin: "0px 10px", color: "#ffffff", backgroundColor: "#3551dc" }}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
