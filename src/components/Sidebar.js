import React from "react";
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
    Drawer,
} from "@mui/material";
import {
    ExpandLess,
    ExpandMore,
} from "@mui/icons-material";
import "./Sidebar.css";

const Sidebar = ({ drawerOpen, setDrawerOpen, collapsed, setCollapsed }) => {

    // State to track which submenu is active
    const [activeSubmenu, setActiveSubmenu] = React.useState("Lookup Types");

    // State to manage open/close of menu items (e.g., General Settings)
    const [menuState, setMenuState] = React.useState({ generalSettings: true });

    const handleToggle = (menu) => {
        setMenuState((prev) => ({ ...prev, [menu]: !prev[menu] }));
    };

    const handleSubmenuClick = (submenu) => {
        setActiveSubmenu(submenu); // Set the active submenu when clicked
    };


    const toggleDrawer = () => {
        setDrawerOpen((prev) => !prev); // Toggle drawer open/close
    };

    return (
        <>
            {/* Mobile Drawer */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer}
                sx={{
                    display: { xs: "block", sm: "none" }, // Only show the drawer on mobile
                }}
            >
                <Box className={`sidebar ${collapsed ? "collapsed" : ""}`} sx={{ width: 250 }}>
                    <Box className="sidebar-header" sx={{ position: "relative" }}>
                        {!collapsed && (
                            <Box className="sidebar-logo">
                                <img
                                    src="assets/logo.png" // Replace with your logo
                                    alt="MedicoJo Logo"
                                    className="logo-image"
                                />
                            </Box>
                        )}
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
                            {!collapsed && <ListItemText primary="Dashboard" />}
                        </ListItem>

                        {/* General Settings */}
                        <ListItem
                            button
                            onClick={() => handleToggle("generalSettings")}
                            className={`menu-item general-settings ${menuState.generalSettings ? "active" : ""}`}
                        >
                            <ListItemIcon className="menu-icon">
                                <img
                                    src="assets/settingsIcon.png"
                                    alt="MedicoJo Logo"
                                    className="logo-image"
                                />
                            </ListItemIcon>
                            {!collapsed && <ListItemText primary="General Settings" />}
                            {menuState.generalSettings ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={menuState.generalSettings} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem
                                    button
                                    className={`submenu-item ${activeSubmenu === "Lookup Types" ? "active" : ""}`}
                                    onClick={() => handleSubmenuClick("Lookup Types")}
                                >
                                    <ListItemText primary="Lookup Types" />
                                </ListItem>
                                {/* Other submenu items */}
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
                            {!collapsed && <ListItemText primary="Users & Permissions" />}
                        </ListItem>
                    </List>
                </Box>
            </Drawer>

            {/* Desktop Sidebar */}
            <Box
                className={`sidebar ${collapsed ? "collapsed" : ""}`}
                sx={{ display: { xs: "none", sm: "block" } }} // Hide sidebar on mobile
            >
                <Box className="sidebar-header" sx={{ position: "relative" }}>
                    {!collapsed && (
                        <Box className="sidebar-logo">
                            <img
                                src="assets/logo.png" // Replace with your logo
                                alt="MedicoJo Logo"
                                className="logo-image"
                            />
                        </Box>
                    )}
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
                        {!collapsed && <ListItemText primary="Dashboard" />}
                    </ListItem>

                    {/* General Settings */}
                    <ListItem
                        button
                        onClick={() => handleToggle("generalSettings")}
                        className={`menu-item general-settings ${menuState.generalSettings ? "active" : ""}`}
                    >
                        <ListItemIcon className="menu-icon">
                            <img
                                src="assets/settingsIcon.png"
                                alt="MedicoJo Logo"
                                className="logo-image"
                            />
                        </ListItemIcon>
                        {!collapsed && <ListItemText primary="General Settings" />}
                        {menuState.generalSettings ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={menuState.generalSettings} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem
                                button
                                className={`submenu-item ${activeSubmenu === "Lookup Types" ? "active" : ""}`}
                                onClick={() => handleSubmenuClick("Lookup Types")}
                            >
                                <ListItemText primary={!collapsed  ?  "Lookup Types" : 'LT'} />
                            </ListItem>
                            {/* Other submenu items */}
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
                        {!collapsed && <ListItemText primary="Users & Permissions" />}
                    </ListItem>
                </List>
            </Box>
        </>
    );
};

export default Sidebar;
