import React from "react";
import { TextField, Button, MenuItem, Select } from "@mui/material";
import {Add } from "@mui/icons-material";

const Filters = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
      }}
    >
      {/* Left Side Filters */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <TextField
          size="small"
          variant="outlined"
          placeholder="Search by name"
          InputProps={{
            style: { backgroundColor: "#fff", borderRadius: "8px" },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              fontSize: "14px",
            },
          }}
        />
        <Select
          defaultValue="Status"
          size="small"
          sx={{
            width: 150,
            backgroundColor: "#fff",
            borderRadius: "8px",
            fontSize: "14px",
          }}
        >
          <MenuItem value="Status">Status</MenuItem>
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </Select>
        <Button
          variant="outlined"
          startIcon={
            <img
            src="assets/filterIcon.png"
            alt="MedicoJo Logo"
            className="logo-image"
        />
        }
          sx={{
            fontSize: "14px",
            textTransform: "none",
            borderRadius: "8px",
            color: "#000",
            backgroundColor: "#fff",
            borderColor: "#ddd",
            "&:hover": { backgroundColor: "#f4f4f4" },
          }}
        >
          Filter
        </Button>
      </div>

      {/* Right Side Actions */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Button
          variant="outlined"
          startIcon={
            <img
            src="assets/downloadIcon.png"
            alt="MedicoJo Logo"
            className="logo-image"
        />
            }
          sx={{
            fontSize: "14px",
            textTransform: "none",
            borderRadius: "8px",
            color: "#000",
            backgroundColor: "#fff",
            borderColor: "#ddd",
            "&:hover": { backgroundColor: "#f4f4f4" },
          }}
        >
          Download Template
        </Button>
        <Button
          variant="outlined"
          startIcon={
            <img
            src="assets/importIcon.png"
            alt="MedicoJo Logo"
            className="logo-image"
        />
        }
          sx={{
            fontSize: "14px",
            textTransform: "none",
            borderRadius: "8px",
            color: "#000",
            backgroundColor: "#fff",
            borderColor: "#ddd",
            "&:hover": { backgroundColor: "#f4f4f4" },
          }}
        >
          Import
        </Button>
        <Button
          variant="outlined"
          startIcon={
            <img
            src="assets/downloadIcon.png"
            alt="MedicoJo Logo"
            className="logo-image"
        />
        }
          sx={{
            fontSize: "14px",
            textTransform: "none",
            borderRadius: "8px",
            color: "#000",
            backgroundColor: "#fff",
            borderColor: "#ddd",
            "&:hover": { backgroundColor: "#f4f4f4" },
          }}
        >
          Export
        </Button>
        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{
            fontSize: "14px",
            textTransform: "none",
            borderRadius: "8px",
            backgroundColor: "#46633E",
            color: "#fff",
            "&:hover": { backgroundColor: "#3d5a36" },
          }}
        >
          Add lookup Type
        </Button>
      </div>
    </div>
  );
};

export default Filters;