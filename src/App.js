import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Filters from "./components/Filters";
import DataTable from "./components/DataTable";
import "./App.css"

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen((prev) => !prev);
    };

    const toggleCollapse = () => {
        setCollapsed((prev) => !prev);
    };

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <Sidebar
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      {/* Main Content */}
      <div
        style={{
          flexGrow: 1,
          transition: "margin-left 0.3s",
          display: "flex",
          flexDirection: "column",
          overflowX: "auto", // Enable horizontal scrolling
        }}
      >
        {/* Scrollable TopBar */}
        <div style={{ overflowX: "auto" }}>
          <TopBar toggleSidebar={() =>{setDrawerOpen(false); toggleCollapse()}} toggleDrawer={()=>{setCollapsed(false); toggleDrawer()}} />
        </div>

        {/* Scrollable Filters and DataTable */}
        <div
          style={{
            flexGrow: 1,
            overflowY: "auto",
            overflowX: "auto", // Horizontal scroll for DataTable
            padding: "20px",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Filters />
          <DataTable />
        </div>
      </div>
    </div>
  );
}

export default App;