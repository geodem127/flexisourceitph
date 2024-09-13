import { Suspense } from "react";

// material-ui
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import ErrorBoundary from "./ErrorBoundary";
import { Backdrop, CircularProgress, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

// styles
const LoaderWrapper = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1301,
  width: "100%",
  height: "2px",
});

// ==============================|| LOADER ||============================== //
const Loader = () => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {smScreen ? (
        <LoaderWrapper>
          <LinearProgress sx={{ height: "4px", opacity: 1 }} color="primary" />
        </LoaderWrapper>
      ) : (
        <Backdrop
          sx={{ color: "#fff", zIndex: 9999999999, position: "absolute" }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component) => {
  const LoadableComponent = (props) => (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    </ErrorBoundary>
  );

  LoadableComponent.displayName = `Loadable(${
    Component.displayName || Component.name || "Component"
  })`;

  return LoadableComponent;
};

export default Loadable;
