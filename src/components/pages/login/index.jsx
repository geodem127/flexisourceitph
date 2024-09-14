import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  TextField,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";

import { useFormik, Form, FormikProvider } from "formik";

import * as Yup from "yup";
import { useAuthentication } from "../../auth";

// username, password;
const LoginFormSchema = Yup.object({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const { isAuthenticated, userLogin, loading } = useAuthentication();

  const navigate = useNavigate();
  //   const [checked, setChecked] = React.useState(true);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginFormSchema,

    onSubmit: async () => {
      const res = await userLogin(
        formik.values.username,
        formik.values.password
      );

      console.log("onSubmit res", res);
      if (res?.status === "failed") {
        setErrorMessage(res?.data?.name);
      }
    },
  });

  useEffect(() => {
    console.log("isAuthenticated", isAuthenticated);

    if (!loading && isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, loading]);

  //   if (isAuthenticated) return <Navigate to="/" />;
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        width: "100vw",
        height: "100vh",
      }}

      //   maxWidth="lg"
    >
      <FormikProvider value={formik}>
        <Form
          autoComplete="off"
          noValidate
          className="studentForm"
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
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
            <TextField
              id="username"
              name="username"
              label="Username"
              error={Boolean(formik.touched.username && formik.errors.username)}
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.username && formik.errors.username}
            ></TextField>
            <TextField
              id="password"
              name="password"
              label="Password"
              type={"password"}
              error={Boolean(formik.touched.password && formik.errors.password)}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.password && formik.errors.password}
            ></TextField>
            {/* <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  label={"Keep me logged in"}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
              label="Keep me logged in"
            /> */}
            <Typography variant="p" color="error" my={0}>
              {errorMessage}
            </Typography>
            <Button
              type="button"
              variant="contained"
              color="primary"
              size="large"
              className="studentFormSubmit"
              disabled={loading}
              onClick={() => {
                formik.handleSubmit();
              }}
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
        </Form>
      </FormikProvider>
    </Container>
    // <Authenticator>{({ signOut, user }) => <Navigate to="/" />}</Authenticator>
  );
};

export default LoginPage;
