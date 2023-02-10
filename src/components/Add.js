import { Fab, Modal, Tooltip, Typography } from "@mui/material";
import React,{useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
const StyledModal = styled(Modal)({
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
})
function Add() {
    const[open , setOpen] = useState(false);
  return (
    <>
      <Tooltip onClick={(e)=>(setOpen(true))}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
  open={open}
  onClose={(e) => (setOpen(false))}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
    <Typography variant="h6" color="grey" textAlign="center">Create Post</Typography>
  </Box>
  </StyledModal>
    </>
  );
}

export default Add;
