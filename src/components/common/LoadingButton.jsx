import React from "react";
import { PropTypes } from "prop-types";
import { Button, CircularProgress } from "@mui/material";

const LoadingButton = ({ isLoading = false, label = "", ...other }) => {
  return (
    <Button disabled={isLoading} {...other}>
      {isLoading && (
        <CircularProgress
          sx={{
            position: "absolute",
            width: "25px!important",
            height: "25px!important",
          }}
        />
      )}
      {label || "Submit"}
    </Button>
  );
};

LoadingButton.propTypes = {
  isLoading: PropTypes.bool,
  label: PropTypes.string,
};

export default LoadingButton;
