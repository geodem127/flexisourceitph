import { useState } from "react";
import { PropTypes } from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink, useLocation } from "react-router-dom";
import {
  alpha,
  Button,
  Container,
  Divider,
  IconButton,
  styled,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Toaster } from "react-hot-toast";
import LoadingButton from "../common/LoadingButton";
import { useAuthentication } from "../auth";
import { useTheme } from "@emotion/react";

const drawerWidth = 240;

const NavLinkWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "4rem 0",
  position: "relative",
}));

const NavLinkButton = styled(Button)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",

  width: "100%",
  padding: "1rem 1.5rem",
  textAlign: "left",
  verticalAlign: "left",
  borderRadius: "0",
  "&.active": {
    background: alpha(theme.palette.primary.main, 0.2),
  },
}));

const NavigationLinks = ({ userLogout, isLoading }) => (
  <NavLinkWrapper>
    <NavLinkButton component={NavLink} to="/">
      Home
    </NavLinkButton>

    <NavLinkButton component={NavLink} to="/students">
      Students
    </NavLinkButton>

    <NavLinkButton component={NavLink} to="/coding-challenge">
      Coding Challenge
    </NavLinkButton>
    <NavLinkButton component={NavLink} to="/xxx">
      Page not found
    </NavLinkButton>

    <Divider style={{ width: "100%" }} />
    <Box px={"1.5rem"} mt={"2rem"} sx={{ width: "100%" }}>
      <LoadingButton
        fullWidth
        variant="contained"
        color="inherit"
        onClick={userLogout}
        isLoading={isLoading}
        label="Logout"
      />
    </Box>
  </NavLinkWrapper>
);

const PageLayout = ({ children }) => {
  const location = useLocation();
  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const { userLogout, loading } = useAuthentication();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          padding: "0",
          minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight - 10}px)`,
        }}
      >
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            {mdScreen && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                sx={{ marginRight: "1rem" }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" noWrap component="div">
              {location?.pathname}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant={mdScreen ? "temporary" : "permanent"}
          open={!mdScreen ? false : open}
          anchor="left"
          onClose={handleDrawerClose}
          onClick={handleDrawerClose}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />

          <NavigationLinks userLogout={userLogout} isLoading={loading} />
        </Drawer>
        <Container
          component="main"
          sx={{
            flexGrow: 1,
            position: "relative",
          }}
        >
          <Toolbar />
          {children}
        </Container>
      </Box>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 5000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </>
  );
};
NavigationLinks.propTypes = {
  userLogout: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
PageLayout.propTypes = {
  userLogout: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageLayout;
