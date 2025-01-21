import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Select,
  Badge,
  Avatar,
  Menu,
} from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MenuIcon from "@mui/icons-material/Menu";

const TopBar = ({ toggleSidebar, toggleDrawer,email,onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget); // Set the anchor element (open the menu)
  };

  const handleClose = () => {
    setAnchorEl(null); // Close the menu
  };

  const handleLogout = () => {
    onLogout();
    setAnchorEl(null); // Close the menu after logout
  };

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{
        whiteSpace: "nowrap",
        overflowX: "auto", // Enable horizontal scroll for smaller screens
        backgroundColor: "#fff",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IconButton
            sx={{ display: { xs: "none", sm: "block" } }}
            className="collapse-button"
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>

          <IconButton
            sx={{ display: { xs: "block", sm: "none" } }}
            className="collapse-button"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              fontSize: "18px",
              fontWeight: "500",
              color: "#000",
              display: { xs: "none", sm: "block" }, // Hide on mobile (xs), show on larger screens (sm and up)
            }}
          >
            Lookup Types
          </Typography>
        </div>

        {/* Right Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <IconButton>
            <WbSunnyOutlinedIcon sx={{ color: "#6c757d" }} />
          </IconButton>
          <Select
            defaultValue="EN"
            size="small"
            sx={{
              backgroundColor: "#f8f9fa",
              height: "35px",
              borderRadius: "20px",
              fontSize: "14px",
              "& .MuiSelect-outlined": {
                padding: "5px 20px",
              },
            }}
          >
            <MenuItem value="EN">EN</MenuItem>
            <MenuItem value="AR">AR</MenuItem>
          </Select>
          <IconButton>
            <EmailOutlinedIcon sx={{ color: "#6c757d" }} />
          </IconButton>
          <IconButton>
            <Badge badgeContent={5} color="error">
              <NotificationsIcon sx={{ color: "#6c757d" }} />
            </Badge>
          </IconButton>
          <Avatar
            sx={{
              width: 35,
              height: 35,
              backgroundColor: "#6c757d",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={handleAvatarClick}
          >
            <img
              src="assets/search.png"
              alt="User Avatar"
              style={{ width: "100%", borderRadius: "50%" }}
            />
          </Avatar>
          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              "& .MuiPaper-root": {
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                padding: "10px",
                minWidth: "200px",
              },
            }}
          >
            <MenuItem
              disabled
              sx={{
                fontSize: "14px",
                color: "#6c757d",
                fontWeight: "bold",
                padding: "10px 15px",
              }}
            >
              {email}
            </MenuItem>
            <MenuItem
              onClick={handleLogout}
              sx={{
                fontSize: "14px",
                color: "#000",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
                padding: "10px 15px",
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
