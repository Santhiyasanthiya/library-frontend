import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import * as yup from "yup"
import { useNavigate, useParams } from "react-router-dom";


export default function EditBook() {
    const {id} = useParams()
  
    const [editBook, setEditBook]=useState()
console.log(editBook) 

useEffect(()=>{
  fetch(`https://63baa34a56043ab3c7a03783.mockapi.io/library/${id}`,{
    method:"GET"
  })
  .then((data)=>data.json())
  .then((mv)=>setEditBook(mv))
},[])


  return (
    <div> 
 {editBook ? <EditBookGet book={editBook} setBook={setEditBook} /> : null }
  </div>
          
  )
}

function EditBookGet ({book, setBook}){
  const editBookvalidationSchema = yup.object({
    title: yup.string().required(),
    picture: yup.string().required().url(),
     trailer:yup.string().required().url(),
     description:yup.string().required()
})

const formik=useFormik({
    initialValues: {
    title:book.title,
    picture:book.picture,
    trailer:book.trailer,
    description:book.description
},

validationSchema: editBookvalidationSchema,
onsubmit:(values)=>{
    // console.log("EditBook:", values)
    editBookPut(values)
}
});
const navigate = useNavigate() 

const editBookPut=(values) =>{
  fetch(`https://63baa34a56043ab3c7a03783.mockapi.io/library/${book.id}`,{
    method:"PUT",
    body:JSON.stringify(values),
    headers:{"Content-type":"application/json"}
  })
  .then((data) => data.json())
  .then(() => navigate("/library"))
}

return(
  <form className='edit-book-container' onSubmit={formik.handleSubmit}>
  <TextField 
  value={formik.values.title}
  id="outlined-basic" 
  label="Title" 
  variant="outlined"
  onChange={formik.handleChange}
  name="title"
  error={formik.touched.title && formik.errors.title}
  helperText={formik.touched.title && formik.errors.title ? formik.errors.title:null}
  onBlur={formik.handleBlur}
/>

     <TextField 
  value={formik.values.picture}
  id="outlined-basic" 
  label="Picture" 
  variant="outlined"
  onChange={formik.handleChange}
  name="Picture"
  error={formik.touched.picture && formik.errors.picture}
  helperText={formik.touched.picture && formik.errors.picture ? formik.errors.picture:null}
  onBlur={formik.handleBlur}
/>

       <TextField 
  value={formik.values.trailer}
  id="outlined-basic" 
  label="Trailer" 
  variant="outlined"
  onChange={formik.handleChange}
  name="Trailer"
  error={formik.touched.trailer && formik.errors.trailer}
  helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer:null}
  onBlur={formik.handleBlur}
/>

        <TextField 
  value={formik.values.description}
  id="outlined-basic" 
  label="Description" 
  variant="outlined"
  onChange={formik.handleChange}
  name="Description"
  error={formik.touched.description && formik.errors.description}
  helperText={formik.touched.description && formik.errors.description ? formik.errors.description:null}
  onBlur={formik.handleBlur}
/>
 <Button variant="contained" type="submit">Update</Button>
</form>
)
}