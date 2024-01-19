import React, { useState } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useNavigate } from "react-router-dom";
import './css/cards.css';
import Trees from "./Trees";

const Cards = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [alignment, setAlignment] = React.useState('web');

  const navigate = useNavigate();
  function gotoview() {
    navigate("/view");
  }
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="flex-grow ml-[100px] mr-[30px]">
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "profile"
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
              id="profile-tab"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected={activeTab === "profile"}
              onClick={() => handleTabClick("profile")}
            >
              Model
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "dashboard"
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
              id="dashboard-tab"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected={activeTab === "dashboard"}
              onClick={() => handleTabClick("dashboard")}
            >
              Data
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div
          className={`p-4 rounded-lg ${
            activeTab === "profile" ? "block" : "hidden"
          }`}
          role="tabpanel"
          aria-labelledby="profile-tab">
          <Trees />
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === "dashboard" ? "block" : "hidden"
          }`}
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <strong className="font-medium text-gray-800 dark:text-white">
              You haven't completed any streams or recordings yet.
            </strong>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
