import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import authFetch from "../custom";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export default function ContactForm(props) {
  const { id, setid, open, opende, action, setAction, setOpen } = props;

  

    // ------------ for Validation --------------------
    const validationSchema = yup.object({
        email: yup
          .string("Enter lead email")
          .email("Enter a valid email")
          .required("Lead email is required"),
        phoneNumber: yup
          .string("Enter lead phone number")
          .matches(/^\d{10}$/, "Lead phone number should be 10 digits long")
          .required("Lead phone number is required"),
      });
      const theme = createTheme();
    
      // ------------ for Form --------------------
      const formik = useFormik({
        initialValues: {
          email: "",
          phoneNumber: "",
          moduleId :"6666887a29d4bf61c12606f8",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          try {
            if(action == 'add') {
            authFetch.post("/form/add", values)
              .then((response) => {
                console.log(response.data);
              });
            }
            else{
              authFetch.put(`/form/edit/${id}`, values)
              .then((response) => {
                console.log(response.data);
              });
            }
            setOpen(false);
          } catch (error) {
            console.error(error);
          }
        },
      });

  return (
    <div>
        <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#ffffff",
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, maxWidth: 500, width: "100%" }}>
          <Typography variant="h5" component="h1" gutterBottom align="center">
            Contact Form
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.leadStatus}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.leadStatus && Boolean(formik.errors.leadStatus)
              }
              helperText={formik.touched.leadStatus && formik.errors.leadStatus}
              margin="normal"
            />
            <TextField
              fullWidth
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              value={formik.values.leadPhoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.leadPhoneNumber &&
                Boolean(formik.errors.leadPhoneNumber)
              }
              helperText={
                formik.touched.leadPhoneNumber && formik.errors.leadPhoneNumber
              }
              margin="normal"
            />
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Box>
    </ThemeProvider>
    </div>
  )
}
