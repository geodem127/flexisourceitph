import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Paper, TextField, Typography } from "@mui/material";

import { useFormik, Form, FormikProvider } from "formik";

import * as Yup from "yup";
import { useAuthentication } from "../../auth";
import LoadingButton from "../../common/LoadingButton";

const LoginFormSchema = Yup.object({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const { isAuthenticated, userLogin, loading } = useAuthentication();

  const navigate = useNavigate();

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
    console.log("isAuthenticated", { isAuthenticated, loading });
    if (!loading && isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, loading]);

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
            />
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
            />

            <Typography variant="p" color="error" my={0}>
              {errorMessage}
            </Typography>

            <LoadingButton
              type="button"
              variant="contained"
              color="primary"
              size="large"
              className="studentFormSubmit"
              disabled={loading}
              isLoading={loading}
              label="Login"
              onClick={() => {
                formik.handleSubmit();
              }}
            />
          </Paper>
        </Form>
      </FormikProvider>
    </Container>
  );
};

export default LoginPage;
