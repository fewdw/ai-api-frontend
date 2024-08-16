"use client";
import React, { useState } from "react";
import MyAPIs from "../components/MyAPIS";
import AddNewRoute from "../components/AddNewRoute";

const Api = () => {
  const [selectedTab, setSelectedTab] = useState("MyAPIs");

  // Function to render the component based on the selected tab
  const renderComponent = () => {
    switch (selectedTab) {
      case "MyAPIs":
        return <MyAPIs />;
      case "AddNewRoute":
        return <AddNewRoute />;
      default:
        return <MyAPIs />;
    }
  };

  return (
    <div>
      <div>
        <div className="sm:hidden">
          <label htmlFor="Tab" className="sr-only">
            Tab
          </label>

          <select
            id="Tab"
            className="w-full rounded-md border-gray-200"
            onChange={(e) => setSelectedTab(e.target.value)}
            value={selectedTab}
          >
            <option value="MyAPIs">My APIs</option>
            <option value="AddNewRoute">Add New Route</option>
          </select>
        </div>

        <div className="hidden sm:block">
          <nav className="flex gap-6 justify-center" aria-label="Tabs">
            <a
              className={`shrink-0 rounded-lg p-2 text-sm font-medium ${
                selectedTab === "MyAPIs"
                  ? "bg-sky-100 text-sky-600"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              }`}
              onClick={() => setSelectedTab("MyAPIs")}
            >
              My APIs
            </a>

            <a
              className={`shrink-0 rounded-lg p-2 text-sm font-medium ${
                selectedTab === "AddNewRoute"
                  ? "bg-sky-100 text-sky-600"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              }`}
              onClick={() => setSelectedTab("AddNewRoute")}
            >
              Add New Route
            </a>
          </nav>
        </div>
      </div>
      <div className="mt-6">{renderComponent()}</div>
    </div>
  );
};

export default Api;
