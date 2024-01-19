import React from "react";
import Navbar from "../components/Navbar.jsx";
// import Cards from "../components/Cards.jsx";
import Card from "../components/Card.jsx";
import "./css/dashboard.css";
import Sidebar from "../components/Sidebar.jsx";

function dashboard() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Card />

      {/* <Cards /> */}
    </div>
  );
}

export default dashboard;
