import React from "react";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import "./css/dashboard.css";
import Sidebar from "../components/Sidebar.jsx";

function dashboard() {
  return (
    <div 
    // style={{ backgroundColor: "#edeef0" }}
    >
      <Sidebar />
      <Navbar />
      <Card />

      {/* <Cards /> */}
    </div>
  );
}

export default dashboard;
