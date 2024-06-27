import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function MeetingForm() {
  const validationSchema = yup.object({
    Agenda: yup.string("Enter Agenda").required("Agenda is required"),
    Location: yup.string("Enter Location").required("Location is required"),
    leadPhoneNumber: yup
      .string("Enter lead phone number")
      .matches(/^\d{10}$/, "Lead phone number should be 10 digits long")
      .required("Lead phone number is required"),
    moduleId: yup.string().required("Module ID is required"),
  });

  const theme = createTheme();

  const formik = useFormik({
    initialValues: {
      Agenda: "",
      Location: "",
      DateTime: "",
      moduleId: "6666887729d4bf61c12606da",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      try {
        console.log(values);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <>
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
          <Paper
            elevation={3}
            sx={{ padding: 4, maxWidth: 500, width: "100%" }}
          >
            <Typography variant="h5" component="h1" gutterBottom align="center">
              Add Meeting
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="Agenda"
                name="Agenda"
                label="Agenda"
                value={formik.values.Agenda}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.Agenda && Boolean(formik.errors.Agenda)}
                helperText={formik.touched.Agenda && formik.errors.Agenda}
                margin="normal"
              />

              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Related To
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="contact"
                    control={<Radio />}
                    label="contact"
                  />
                  <FormControlLabel
                    value="lead"
                    control={<Radio />}
                    label="lead"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                fullWidth
                id="Location"
                name="Location"
                label="Location"
                value={formik.values.Location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.Location && Boolean(formik.errors.Location)
                }
                helperText={formik.touched.Location && formik.errors.Location}
                margin="normal"
              />

              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateTimePicker"]}>
                  <DateTimePicker label="Date & Time" />
                </DemoContainer>
              </LocalizationProvider> */}
              <TextField
                fullWidth
                id="leadPhoneNumber"
                name="leadPhoneNumber"
                label="Lead Phone Number"
                value={formik.values.leadPhoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.leadPhoneNumber &&
                  Boolean(formik.errors.leadPhoneNumber)
                }
                helperText={
                  formik.touched.leadPhoneNumber &&
                  formik.errors.leadPhoneNumber
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
    </>
  );
}
