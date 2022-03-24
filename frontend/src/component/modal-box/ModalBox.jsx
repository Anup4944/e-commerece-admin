import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalBox = ({ show, children, toggleModal }) => {
  return (
    <div>
      <Modal
        open={show}
        onHide={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 300, height: 200 }}>
          {children}
          <button onClick={toggleModal}>Close</button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalBox;
