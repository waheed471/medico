import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Grid,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

const modalStyle = (theme) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
  [theme.breakpoints.up("sm")]: {
    width: 500,
  },
});

const CustomSwitch = styled(Switch)(({ theme }) => ({
  "& .Mui-checked": {
    color: "#58684F",
  },
  "& .Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#58684F",
  },
}));

const AddLookupModal = ({ open, handleClose, handleSave,data }) => {
  const [lookupTypeName, setLookupTypeName] = useState("");
  const [comments, setComments] = useState("" );
  const [isActive, setIsActive] = useState(false);
  const [errors, setErrors] = useState({}); // Error state

  useEffect(() => {
    setLookupTypeName(data?.typeName);
    setComments(data?.comments);
    setIsActive(data?.iActive)
}, [data]);

  const validate = () => {
    const newErrors = {};
    if (!lookupTypeName.trim()) {
      newErrors.lookupTypeName = "Lookup Type Name is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = () => {
    if (!validate()) return; // Stop if validation fails

    const newLookup = {
      lookupTypeName,
      comments,
      isActive,
    };
    handleSave(newLookup);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="add-lookup-modal-title"
      aria-describedby="add-lookup-modal-description"
    >
      <Box sx={modalStyle}>
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            id="add-lookup-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", color: "#333" }}
          >
            {data?.id ? "Edit Lookup Type" : "Add Lookup Type"} 
          </Typography>
          <IconButton
            onClick={handleClose}
            sx={{
              color: "#333",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Full-Width Separator */}
        <Divider sx={{ mb: 2, width: "100%" }} />

        {/* Active Toggle Section */}
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <FormControlLabel
              control={
                <CustomSwitch
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                />
              }
              label="Active"
              labelPlacement="start"
              sx={{
                "& .MuiTypography-root": {
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                },
              }}
            />
          </Grid>
        </Grid>

        {/* Form Section */}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
              Lookup Type Name
            </Typography>
            <TextField
              fullWidth
              margin="normal"
              placeholder="Lookup Type Name"
              value={lookupTypeName}
              onChange={(e) => setLookupTypeName(e.target.value)}
              error={!!errors.lookupTypeName} // Show error style
              helperText={errors.lookupTypeName} // Show error message
              variant="outlined"
              InputProps={{
                sx: { borderRadius: 2, height: 50 },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
              Comments
            </Typography>
            <TextField
              fullWidth
              margin="normal"
              placeholder="Comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              error={!!errors.comments} // Show error style
              helperText={errors.comments} // Show error message
              variant="outlined"
              InputProps={{
                sx: { borderRadius: 2, height: 50 },
              }}
            />
          </Grid>
        </Grid>

        {/* Buttons Section */}
        <Grid
          container
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
          }}
        >
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#333",
              borderColor: "#ccc",
              "&:hover": {
                backgroundColor: "#f5f5f5",
                borderColor: "#ccc",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "#58684F",
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            {data?.id ? "Save Lookup Type" : "Add Lookup Type"} 
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default AddLookupModal;
