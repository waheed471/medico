import React from "react";
import { TextField, Button, MenuItem, Select, Box } from "@mui/material";
import { Add } from "@mui/icons-material";

const Filters = ({handleLookupModal}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // Stack on mobile, row on larger screens
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        gap: "10px",
      }}
    >
      {/* Left Side Filters */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack on mobile, row on larger screens
          gap: "10px",
          width: "100%", // Full width on mobile
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack on mobile, row on larger screens
            gap: "10px",
            width: "100%", // Full width on mobile
          }}
        >
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search by name"
            InputProps={{
              style: { backgroundColor: "#fff", borderRadius: "8px" },
            }}
            sx={{
              width: "100%", // Full width on mobile
              "& .MuiOutlinedInput-root": {
                fontSize: "14px",
              },
            }}
          />
          <Select
            defaultValue="Status"
            size="small"
            sx={{
              width: "100%", // Full width on mobile
              backgroundColor: "#fff",
              borderRadius: "8px",
              fontSize: "14px",
            }}
          >
            <MenuItem value="Status">Status</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack on mobile, row on larger screens
            gap: "10px",
            width: "100%", // Full width on mobile
          }}
        >
        </Box>

      </Box>

      {/* Right Side Actions */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack on mobile, row on larger screens
          gap: "10px",
          width: "100%", // Full width on mobile
          justifyContent: { xs: "center", sm: "flex-start" }, // Center on mobile, left on larger screens
        }}
      >
          <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack on mobile, row on larger screens
          gap: "10px",
          width: "100%", // Full width on mobile
          justifyContent: { xs: "center", sm: "flex-start" }, // Center on mobile, left on larger screens
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack on mobile, row on larger screens
          gap: "10px",
          width: "100%", // Full width on mobile
          justifyContent: { xs: "center", sm: "flex-start" }, // Center on mobile, left on larger screens
        }}
      >
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleLookupModal}
          sx={{
            width: "100%", // Full width on mobile
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
        </Box>
      </Box>
    </Box>
  );
};

export default Filters;
