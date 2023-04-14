import { TextField } from '@mui/material';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import { toUnitless } from "@mui/material/styles/cssUtils";

export default function AddBook() {
  
  const addbookValidationSchema = yup.object({
    title: yup.string().required(),
    picture: yup.string().required(),
    trailer: yup.string().required(),
    description: yup.string().required(),
 
  })

  const formik = useFormik({
    initialValues:{
      title:"",
    picture:"",
    trailer:"",
    description:"",
  },
  validationSchema: addbookValidationSchema,
  onSubmit: (values) =>{
    addBook(values)
  },
  })
  const navigate = useNavigate()


// // [----------------------->follow 3 dteps 
// 1.Method => POST,
// 2.BODY : data &JSON (string )
// 3.HEADERS => JSON 
// // ]
const addBook = (values) => {
      fetch(`https://63baa34a56043ab3c7a03783.mockapi.io/library`,{
       method: "POST",
       body:JSON.stringify(values),
        headers:{"Content-type" : "application/json"}
})
.then(() => navigate("/library"))
  };
  
  return (
  
    <form className="add-library-form" onSubmit={formik.handleSubmit}>
    <TextField
    value={formik.values.title}
      id="outlined-basic"
      label="Title"
      variant="outlined"
      placeholder="Enter Book Name" 
      onChange={formik.handleChange}
      name="title"
      error={formik.touched.title && formik.errors.title}
      helperText={formik.touched.title && formik.errors.title ? formik.errors.title: null}      
      onBlur={formik.handleBlur}
    />
  {toUnitless}

  <TextField
     value={formik.values.picture}
      id="outlined-basic"
      label="picture"
      variant="outlined"
      placeholder="Link a picture"
      onChange={formik.handleChange}
      name="picture"
      error={formik.touched.picture && formik.errors.picture}
      helperText={formik.touched.picture && formik.errors.picture ? formik.errors.picture: null}
      onBlur={formik.handleBlur}
    />

    <TextField
       value={formik.values.trailer}
      id="outlined-basic"
      label="Trailer"
      variant="outlined"
      placeholder="Link a Trailer"
      onChange={formik.handleChange}
      name="trailer"
      error={formik.touched.trailer && formik.errors.trailer}
      helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer: null}
      onBlur={formik.handleBlur}
    />

 

    <TextField
       value={formik.values.description}
      id="outlined-basic"
      label="description"
      variant="outlined"
      placeholder="Enter a description"
      onChange={formik.handleChange}
      name="description"
      error={formik.touched.description && formik.errors.description}
      helperText={formik.touched.description && formik.errors.description ? formik.errors.description: null}
       onBlur={formik.handleBlur}
    />
  
    <Button type="submit" variant="contained" color="warning">Add-Book</Button>
  </form>
  
  )
}
