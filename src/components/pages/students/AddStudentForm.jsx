import { useState } from "react";
import { PropTypes } from "prop-types";
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useFormik, Form, FormikProvider } from "formik";

import * as Yup from "yup";
import { generateUUID } from "../../../utils/uuidGenerator";

const FormContainer = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  padding: theme.spacing(5),
  "& .formRow": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: ".5rem 0 1.5rem 0",
  },
  "& .formCol": {
    width: "300px",
  },
  "& .formAction": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    padding: "2rem 0 0 0",
  },
  "& .formInput": {
    "& p.MuiFormHelperText-root": {
      position: "absolute",
      left: 0,
      top: "100%",
      width: "95%",
      color: "red",
    },
  },
}));

const StudentFormSchema = Yup.object({
  //   student_id: Yup.string().required("Required"),
  student_id: Yup.string(),
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  dob: Yup.date()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .required("Date of birth is required")
    .max(new Date(), "Date of birth cannot be in the future"),
});

export default function AddStudentForm({
  onClose,
  createNewStudent,
  isLoading,
}) {
  const [submitError, setSubmitError] = useState(null);
  const [dateError, setDateError] = useState("");
  const studentUUID = generateUUID();

  const formik = useFormik({
    initialValues: {
      student_id: "",
      first_name: "",
      last_name: "",
      email: "",
      dob: null,
    },
    validationSchema: StudentFormSchema,

    onSubmit: async () => {
      setSubmitError("");

      const newStudent = {
        id: studentUUID,
        ...formik.values,
        student_id: `${formik.values.first_name.substring(0, 3)}${
          formik.values.last_name
        }`
          .trim()
          .toLocaleLowerCase(),
      };

      await createNewStudent({ ...newStudent });
      onClose();
    },
  });
  const validateDate = (event, val = null) => {
    const dateValue = event === "onChange" ? val : formik.values.dob;
    const dateIsNaN = isNaN(dateValue);
    const hasFormikError = Boolean(formik.errors.dob);
    const dateIsValid = Boolean(dateValue);

    if (dateIsNaN) return setDateError("Date is invalid");
    if (hasFormikError && !dateIsValid) return setDateError(formik.errors.dob);
    setDateError("");
  };

  return (
    <FormContainer>
      <Typography
        variant="h4"
        component="div"
        sx={{ mb: 2, textAlign: "left" }}
      >
        Create New Student
      </Typography>
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
          <Box className="formRow">
            <TextField
              sx={{
                height: 0,
                overflow: "hidden",
                position: "relative",
                minHeight: 0,
              }}
              id="student_id"
              name="student_id"
              label="Student ID"
              fullWidth
              className="formInput"
              error={Boolean(
                formik.touched.student_id && formik.errors.student_id
              )}
              value={`${formik.values.first_name.substring(0, 3)}${
                formik.values.last_name
              }`
                .trim()
                .toLocaleLowerCase()}
              onChange={formik.handleChange}
              //   onBlur={formik.handleBlur}
              //   helperText={formik.touched.student_id && formik.errors.student_id}
              //   focused
              disabled
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
          </Box>
          <Box className="formRow" columnGap={2}>
            <TextField
              id="first_name"
              name="first_name"
              className="formCol formInput"
              label="First Name"
              error={Boolean(
                formik.touched.first_name && formik.errors.first_name
              )}
              value={formik.values.first_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.first_name && formik.errors.first_name}
              autoComplete="off"
              type="text"
            />
            <TextField
              id="last_name"
              name="last_name"
              className="formCol formInput"
              label="Last Name"
              error={Boolean(
                formik.touched.last_name && formik.errors.last_name
              )}
              value={formik.values.last_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.last_name && formik.errors.last_name}
            />
          </Box>
          <Box className="formRow" columnGap={2}>
            <TextField
              id="email"
              name="email"
              className="formCol formInput"
              label="Email"
              type="email"
              error={Boolean(formik.touched.email && formik.errors.email)}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.email && formik.errors.email}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                disableFuture
                label="Date of Birth"
                id="dob"
                name="dob"
                className="formCol formInput"
                value={formik.values.dob}
                onChange={(newValue) => {
                  formik.setFieldValue("dob", newValue).then(() => {
                    validateDate("onChange", newValue);
                  });
                }}
                slotProps={{
                  textField: {
                    helperText: dateError,
                    clearable: false,
                    error: Boolean(dateError),
                    onBlur: () => validateDate("onBlur", null),
                  },
                }}
              />
            </LocalizationProvider>
          </Box>

          <Typography
            variant="body2"
            component="div"
            color="error"
            mt={1}
            sx={{ border: "0 solid red", minHeight: "3rem" }}
          >
            {submitError}
          </Typography>
          <Box className="formAction" columnGap={1}>
            <Button
              type="button"
              variant="outlined"
              color="inherit"
              size="large"
              disabled={isLoading}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="contained"
              color="primary"
              size="large"
              className="studentFormSubmit"
              disabled={isLoading}
              onClick={() => {
                validateDate();
                formik.handleSubmit();
              }}
            >
              {isLoading && (
                <CircularProgress
                  sx={{
                    position: "absolute",
                    width: "25px!important",
                    height: "25px!important",
                  }}
                />
              )}
              Submit
            </Button>
          </Box>
        </Form>
      </FormikProvider>
    </FormContainer>
  );
}

AddStudentForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  createNewStudent: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
