import React, { useState } from "react";
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
    IconButton,
} from "@mui/material";
import {
    ExpandLess,
    ExpandMore,
    Menu,
} from "@mui/icons-material";
import "./Sidebar.css";

const Sidebar = () => {
    const [open, setOpen] = useState({ generalSettings: true });
    const [collapsed, setCollapsed] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState("Lookup Types");

    const handleToggle = (menu) => {
        setOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
    };

    const handleSubmenuClick = (submenu) => {
        setActiveSubmenu(submenu);
    };

    const toggleCollapse = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <Box className={`sidebar ${collapsed ? "collapsed" : ""}`}>
            {/* Top Section with Logo and Collapse Button */}
            <Box className="sidebar-header">
                {!collapsed && (
                    <Box className="sidebar-logo">
                        <img
                            src="assets/logo.png" // Replace with your logo
                            alt="MedicoJo Logo"
                            className="logo-image"
                        />
                    </Box>
                )}
                <IconButton className="collapse-button" onClick={toggleCollapse}>
                    <Menu />
                </IconButton>
            </Box>

            {/* Menu */}
            <List component="nav" className="sidebar-menu">
                {/* Dashboard */}
                <ListItem button className="menu-item">
                    <ListItemIcon className="menu-icon">
                        <img
                            src="assets/dashboardIcon.png"
                            alt="MedicoJo Logo"
                            className="logo-image"
                        />
                    </ListItemIcon>
                    {!collapsed && <ListItemText primary="Dashboard" className="menu-text" />}
                </ListItem>

                {/* General Settings */}
                <ListItem
                    button
                    onClick={() => handleToggle("generalSettings")}
                    className={`menu-item general-settings ${open.generalSettings ? "active" : ""
                        }`}
                >
                    <ListItemIcon className="menu-icon">
                        <img
                            src="assets/settingsIcon.png"
                            alt="MedicoJo Logo"
                            className="logo-image"
                        />
                    </ListItemIcon>
                    {!collapsed && (
                        <>
                            <ListItemText primary="General Settings" className="general-settings-menu-text" />
                            {open.generalSettings ? <ExpandLess className="general-settings-menu-text" /> : <ExpandMore className="general-settings-menu-text" />}
                        </>
                    )}
                </ListItem>
                <Collapse in={!collapsed && open.generalSettings} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem
                            button
                            className={`submenu-item ${activeSubmenu === "Lookup Types" ? "active" : ""
                                }`}
                            onClick={() => handleSubmenuClick("Lookup Types")}
                        >
                            <ListItemText primary="Lookup Types" className="submenu-text" />
                        </ListItem>
                        <ListItem
                            button
                            className={`submenu-item ${activeSubmenu === "Lookups" ? "active" : ""
                                }`}
                            onClick={() => handleSubmenuClick("Lookups")}
                        >
                            <ListItemText primary="Lookups" className="submenu-text" />
                        </ListItem>
                        <ListItem
                            button
                            className={`submenu-item ${activeSubmenu === "System Settings" ? "active" : ""
                                }`}
                            onClick={() => handleSubmenuClick("System Settings")}
                        >
                            <ListItemText primary="System Settings" className="submenu-text" />
                        </ListItem>

                        <ListItem
                            button
                            className={`submenu-item ${activeSubmenu === "Manage Screens" ? "active" : ""
                                }`}
                            onClick={() => handleSubmenuClick("Manage Screens")}
                        >
                            <ListItemText primary="Manage Screens" className="submenu-text" />
                        </ListItem>

                        <ListItem
                            button
                            className={`submenu-item ${activeSubmenu === "Approvals Settings" ? "active" : ""
                                }`}
                            onClick={() => handleSubmenuClick("Approvals Settings")}
                        >
                            <ListItemText primary="Approvals Settings" className="submenu-text" />
                        </ListItem>

                        <ListItem
                            button
                            className={`submenu-item ${activeSubmenu === "View Approvals" ? "active" : ""
                                }`}
                            onClick={() => handleSubmenuClick("View Approvals")}
                        >
                            <ListItemText primary="View Approvals" className="submenu-text" />
                        </ListItem>
                    </List>
                </Collapse>

                {/* Additional Menu Items */}
                <ListItem button className="menu-item">
                    <ListItemIcon className="menu-icon">
                        <img
                            src="assets/userIcon.png"
                            alt="MedicoJo Logo"
                            className="logo-image"
                        />
                    </ListItemIcon>
                    {!collapsed && <ListItemText primary="Users & Permissions" className="menu-text" />}
                </ListItem>
                <ListItem button className="menu-item">
                    <ListItemIcon className="menu-icon">
                        <img
                            src="assets/clientIcon.png"
                            alt="MedicoJo Logo"
                            className="logo-image"
                        />
                    </ListItemIcon>
                    {!collapsed && <ListItemText primary="Client Management" className="menu-text" />}
                </ListItem>
            </List>
        </Box>
    );
};

export default Sidebar;