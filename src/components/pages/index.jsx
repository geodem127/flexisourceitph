import { PropTypes } from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink, useLocation } from "react-router-dom";
import { alpha, Button, Divider, styled } from "@mui/material";
import { Toaster } from "react-hot-toast";
import LoadingButton from "../common/LoadingButton";
import { useAuthentication } from "../auth";

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

const PageLayout = ({ children }) => {
  const location = useLocation();
  const { userLogout, loading } = useAuthentication();
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              {location?.pathname}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
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
          <NavLinkWrapper>
            <NavLinkButton component={NavLink} to="/">
              Home
            </NavLinkButton>

            <NavLinkButton component={NavLink} to="/students">
              Students
            </NavLinkButton>

            <Divider style={{ width: "100%" }} />
            <Box px={"1.5rem"} mt={"2rem"} sx={{ width: "100%" }}>
              <LoadingButton
                fullWidth
                variant="contained"
                color="inherit"
                onClick={userLogout}
                isLoading={loading}
                label="Logout"
              />
            </Box>
          </NavLinkWrapper>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Toolbar />
          {children}
        </Box>
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

PageLayout.propTypes = {
  userLogout: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageLayout;
