import React from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
  textAlign: "center",
};

const SuccessModal = ({ open, handleClose, title, message }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="success-modal-title"
      aria-describedby="success-modal-message"
    >
      <Box sx={modalStyle}>
        {/* Success Icon */}
        <IconButton
          sx={{
            backgroundColor: "#4CAF50",
            color: "#fff",
            width: 60,
            height: 60,
            borderRadius: "50%",
            mb: 2,
            "&:hover": {
              backgroundColor: "#4CAF50",
            },
          }}
        >
          <CheckCircleOutlineIcon sx={{ fontSize: 40 }} />
        </IconButton>

        {/* Title */}
        <Typography
          id="success-modal-title"
          variant="h6"
          component="h2"
          sx={{ fontWeight: "bold", mb: 1 }}
        >
          {title}
        </Typography>

        {/* Message */}
        <Typography
          id="success-modal-message"
          sx={{ color: "#666", mb: 3 }}
        >
          {message}
        </Typography>

        {/* Continue Button */}
        <Button
          onClick={handleClose}
          variant="contained"
          sx={{
            width:'100%',
            backgroundColor: "#58684F",
            borderRadius:'8px',
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
        >
          Continue
        </Button>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
