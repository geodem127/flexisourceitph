import * as React from "react";
import { PropTypes } from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/material";

const DialogStyles = styled(Dialog)(() => ({
  "& .MuiPaper-root": {
    width: "300px",
    height: "200px",
    padding: "1rem",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmationDialog({
  open = false,
  onClose,
  title = "",
  content = "",
  action,
}) {
  const handleConfirm = () => {
    action();
    onClose();
  };

  return (
    <React.Fragment>
      <DialogStyles open={open} TransitionComponent={Transition}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="inherit" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleConfirm}>
            Confirm
          </Button>
        </DialogActions>
      </DialogStyles>
    </React.Fragment>
  );
}

ConfirmationDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  action: PropTypes.func.isRequired,
};
