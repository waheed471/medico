import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton,Box } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "lookupTypeName", headerName: "Lookup Type Name", width: 200 },
  { field: "lookupsCount", headerName: "Lookups Count", width: 150 },
  { field: "createdBy", headerName: "Created By", width: 150 },
  { field: "createdAt", headerName: "Created At", width: 150 },
  { field: "modifiedBy", headerName: "Modified By", width: 150 },
  { field: "modifiedAt", headerName: "Modified At", width: 150 },
  { field: "status", headerName: "Status", width: 120,
  renderCell: (params) => (
    <Box
    sx={{
      display: "inline-block",
      padding: "0px 8px",
      alignItems:'center',
      borderRadius: "8px",
      border: `1px solid ${params.value === "Active" ? "#22bb33" : "#cccccc"}`,
      backgroundColor: params.value === "Active" ? "#d4f9e6" : "#f5f5f5",
      color: params.value === "Active" ? "#22bb33" : "#333",
      fontWeight: 600,
      height: "32px", // Set your desired height here
      lineHeight: "34px", // Center text vertically
    }}
  >
    {params.value}
  </Box>
  ),
},
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => (
      <div>
            <IconButton>
                <img
                    src="assets/editIcon.png"
                    alt="MedicoJo Logo"
                    className="logo-image"
                />
            </IconButton>
            <IconButton>
                <img
                    src="assets/deleteIcon.png"
                    alt="MedicoJo Logo"
                    className="logo-image"
                />
            </IconButton>
      </div>
    ),
  },
];

const rows = [
  {
    id: 1,
    lookupTypeName: "Status",
    lookupsCount: 3,
    createdBy: "MedicoJo",
    createdAt: "25 Jan 2024",
    modifiedBy: "Hussam",
    modifiedAt: "26 Jan 2024",
    status: "Active",
  },
  {
    id: 2,
    lookupTypeName: "Country",
    lookupsCount: 3,
    createdBy: "MedicoJo",
    createdAt: "25 Jan 2024",
    modifiedBy: "Hussam",
    modifiedAt: "26 Jan 2024",
    status: "Inactive",
  },
  // Add more rows as needed
];

const DataTable = () => {
  return (
    <div style={{ height: 500, width: "100%", marginTop: "20px" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default DataTable;
