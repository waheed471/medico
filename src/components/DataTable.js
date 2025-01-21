import React,{useState} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Box } from "@mui/material";

// Utility function to format the date
const formatDate = (dateString) => {
  if (!dateString) return "---";
  const date = new Date(dateString);
  const options = { day: "2-digit", month: "short", year: "numeric" }; // Format: 25 Jan 2025
  return date.toLocaleDateString("en-GB", options); // Use en-GB for day-first format
};


const DataTable = ({ rows, onEdit, onDelete }) => {
  const [pageSize, setPageSize] = useState(5);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "lookupTypeName", headerName: "Lookup Type Name", width: 200 },
    { field: "lookupsCount", headerName: "Lookups Count", width: 150 },
    { field: "createdBy", headerName: "Created By", width: 150 },
    { field: "createdAt", headerName: "Created At", width: 150 },
    { field: "modifiedBy", headerName: "Modified By", width: 150 },
    { field: "modifiedAt", headerName: "Modified At", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => (
        <Box
          sx={{
            display: "inline-block",
            padding: "0px 8px",
            alignItems: "center",
            borderRadius: "8px",
            backgroundColor: params.row.statusBGColor || "#f5f5f5",
            color: params.row.statusTextColor || "#333",
            fontWeight: 600,
            height: "32px",
            lineHeight: "34px",
            textAlign: "center",
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
          <IconButton onClick={() => onEdit(params.row)}>
            <img
              src="assets/editIcon.png"
              alt="Edit"
              className="logo-image"
            />
          </IconButton>
          <IconButton onClick={() => onDelete(params.row)}>
            <img
              src="assets/deleteIcon.png"
              alt="Delete"
              className="logo-image"
            />
          </IconButton>
        </div>
      ),
    },
  ];

  // Map rows to the format required by the DataGrid
  const formattedRows = rows.map((item) => ({
    id: item.lookupTypeID,
    lookupTypeName: item.lookupTypeName,
    lookupsCount: item.lookupsCount,
    createdBy: item.enterUser?.fullNameEN || "---",
    createdAt: formatDate(item.enterDate),
    modifiedBy: item.modUser?.fullNameEN || "---",
    modifiedAt: formatDate(item.modDate),
    status: item.status?.lookupNameEN || "---",
    statusBGColor: item.status?.lookupBGColor || "#f5f5f5", // Background color from API
    statusTextColor: item.status?.lookupTextColor || "#333", // Text color from API
  }));

  return (
    <div style={{ height: 500, width: "100%", marginTop: "20px" }}>
      <DataGrid
        rows={formattedRows}
        columns={columns}
        initialState={{
          ...formattedRows.initialState,
          pagination: { paginationModel: { pageSize: 10,page:0 } },
        }}
        pageSizeOptions={[10, 50, 100]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
