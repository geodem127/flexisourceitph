import { useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { Button, styled } from "@mui/material";
import { useAuthentication } from "./components/auth";
// import { Navigate, Outlet } from "react-router-dom";
// import { useAuthentication } from "./components/auth";

const drawerWidth = 240;

const NavLinkWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "2rem 1rem",
  rowGap: "1rem",
}));

const NavLinkButton = styled(NavLink)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
}));

export default function App() {
  const { isAuthenticated, userLogout } = useAuthentication();
  useEffect(() => {
    console.log("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);
  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
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
          {/* <List>
       
            <ListItem>
              <ListItemButton component={NavLink} to="/home">
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component={NavLink} to="/students">
                <ListItemText primary="Students" />
              </ListItemButton>
            </ListItem>
          </List> */}

          <NavLinkButton to="/home">Home</NavLinkButton>

          <NavLinkButton to="/students">Students</NavLinkButton>

          <Button variant="contained" color="inherit" onClick={userLogout}>
            Logout
          </Button>
        </NavLinkWrapper>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
