import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const anav = useNavigate();

    const validationSchema = yup.object({
        username: yup
          .string('Enter your email')
          .email('Enter a valid email')
          .required('Email is required'),
        password: yup
          .string('Enter your password')
          .min(4, 'Password should be of minimum 8 characters length')
          .required('Password is required'),
      });

      const formik = useFormik({
        initialValues: {
          username: '',
          password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            axios.post("http://127.0.0.1:5001/api/user/login",values)
            .then(y=>{
                localStorage.setItem("userInfo", JSON.stringify(y.data));
                console.log(y.data);

                if(y.status == 200 || y.status == 201){
                  anav("/lead");
                }
            })
            
        },
      });
  return (
    <div>
<form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="username"
          name="username"
          label="email"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}