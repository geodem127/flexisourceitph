// import { Authenticator, Button, Grid } from "@aws-amplify/ui-react";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";

import React from "react";

import { Navigate } from "react-router-dom";
import { useAuthentication } from "../../auth";

const LoginPage = () => {
  const { isAuthenticated, userLogin, loading } = useAuthentication();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleLogin = () => {
    console.log("login");
    userLogin("catressaquassa-8526@yopmail.com", "abcd1234");
  };
  if (isAuthenticated) return <Navigate to="/" />;
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        outline: "1px solid red",
        width: "100vw",
        height: "100vh",
      }}

      //   maxWidth="lg"
    >
      <Paper
        elevation={3}
        sx={{
          width: "500px",
          //   height: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "stretch",
          rowGap: "2rem",
          padding: "5rem",
        }}
      >
        <TextField label="Username"></TextField>
        <TextField label="Password" type={"password"}></TextField>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              label={"Keep me logged in"}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          }
          label="Keep me logged in"
        />
        <Button
          fullWidth
          onClick={handleLogin}
          loading={loading}
          variant="outlined"
        >
          {loading && (
            <CircularProgress
              sx={{
                position: "absolute",
                width: "25px!important",
                height: "25px!important",
              }}
            />
          )}
          Login
        </Button>
      </Paper>
    </Container>
    // <Authenticator>{({ signOut, user }) => <Navigate to="/" />}</Authenticator>
  );
};

export default LoginPage;
