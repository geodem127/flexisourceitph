import React from "react";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

import { Button, Typography } from "@mui/material";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      stateError: undefined,
    };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
    console.warn(`ERROR: ${error}`);
    console.warn(`ERROR INFO: ${JSON.stringify(errorInfo)}`);

    this.setState({
      stateError: error,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "grid",
            placeContent: "center",
          }}
        >
          <ErrorBounderyReload stateError={this.state.stateError} />
        </div>
      );
    }

    return this.props.children;
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
  };
}

export default ErrorBoundary;

const ErrorBounderyReload = ({ stateError }) => {
  const navigate = useNavigate();

  const reloadPage = () => {
    navigate(-1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Typography variant="h2" component="div">
        OOPS!
      </Typography>
      <Typography variant="h6" component="div" color="primary">
        Something went wrong
      </Typography>
      <Button
        variant="contained"
        onClick={reloadPage}
        sx={{ width: "fit-content", mt: 2 }}
      >
        GO BACK
      </Button>
    </div>
  );
};
