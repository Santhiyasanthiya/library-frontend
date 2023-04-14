import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export default function LibraryDetails() {
    const { id } =useParams()
    
    const [book, setBook]=useState([])
    useEffect(() =>{
      fetch(`https://63baa34a56043ab3c7a03783.mockapi.io/library/${id}`,{
        method: "GET"
      })
      .then((data) =>data.json())
      .then((mvs) =>setBook (mvs))
    },[])
    const navigate = useNavigate() 
  return (
    <div>
    <iframe       
        width="100%"
        height="600px"
        src={book.trailer}
        title={book.title} 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
    </iframe>

        <div className="library-detail-container">
        <div className="library-spec">
           <h2 className="library-name">{book.title}</h2>
           <h2 className="library-pic">{book.picture}</h2>
         </div>

         <p className="movie-description">{book.description}</p>       </div>
     <Button variant="contained" startIcon={<ArrowBackIosIcon />} onClick={()=> navigate(-1)}>Back</Button>
    </div>
  )
}
