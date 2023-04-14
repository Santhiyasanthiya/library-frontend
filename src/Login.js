import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";

export default function Login() {

  const loginValidationSchema =  yup.object({
email:yup.string().required("Email is Empty").min(8, "type more then 8 letter Email"),
password:yup.string().required("Password is Empty").min(5, "plz enter more then 5 character")
  })

  const formik = useFormik({
initialValues:{
  email:"",
  password:"",
},

validationSchema:loginValidationSchema,

//STEP 1
onSubmit:(values) => {
  console.log(values)
}
  })
  return (
////STEP 2
     <form className='login-page' onSubmit={formik.handleSubmit}>
      <TextField
        value={formik.values.email}
        id="outlined-basic"
        label="Email ID"
        variant="outlined"
        type={"text"}
        placeholder={"Enter your Email ID"}
        onChange={formik.handleChange}
        name="email"
        onBlur={formik.handleBlur}
        error={formik.touched.email && formik.errors.email}
        helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}

      />


      <TextField
        value={formik.values.password}
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type={"text"}
        placeholder={"Enter your Password"}
        onChange={formik.handleChange}
        name="password"
        onBlur={formik.handleBlur}
        error={formik.touched.password && formik.errors.password}
        helperText={formik.touched.password && formik.errors.password ? formik.errors.password : null}
      />



      <Button variant="contained" type="submit">Click Me</Button>

 
    </form>

  )
}


