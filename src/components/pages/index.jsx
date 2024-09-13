import { useEffect } from "react";
import { PropTypes } from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink, useLocation } from "react-router-dom";
import { alpha, Button, Divider, styled } from "@mui/material";

const drawerWidth = 240;

const NavLinkWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "4rem 0",
  //   rowGap: "1rem",
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
  //   background: "transparent",
}));

const PageLayout = ({ userLogout, children }) => {
  const location = useLocation();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
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
          <NavLinkButton component={NavLink} to="/home">
            Home
          </NavLinkButton>

          <NavLinkButton component={NavLink} to="/students">
            Students
          </NavLinkButton>

          <Divider style={{ width: "100%" }} />
          <Box px={"1.5rem"} mt={"2rem"} sx={{ width: "100%" }}>
            <Button
              fullWidth
              variant="contained"
              color="inherit"
              onClick={userLogout}
            >
              Logout
            </Button>
          </Box>
        </NavLinkWrapper>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

PageLayout.propTypes = {
  userLogout: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
