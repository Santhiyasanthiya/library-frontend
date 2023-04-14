import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import Counter from "./Counter";
import { useNavigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import { Card, CardActions, CardContent } from "@mui/material";
import EditBook from "./EditBook";


export default function Book({ picture, title, description, id, deleteButton, editBook }) {
 
  const [show, setShow] = useState(true);

  const navigate = useNavigate()

  return (
    <Card className="profile-container">
      <img className="profile-pic" src={picture} alt={title} />
     <CardContent>
     <div className="profile-spec">
        <h3 className="profile-title"> {title}

          <IconButton
            aria-label="Toggle Description"
            onClick={() => setShow(!show)}
            color="primary"
          >
            {show ? (
              <ExpandLessIcon fontSize="large" />
            ) : (
              <ExpandMoreIcon fontSize="large" />
            )}
          </IconButton>

          <IconButton aria-label="Info" 
          onClick={()=> navigate(`/library/details/${id}`) }>
         <InfoIcon fontSize="medium" />
        </IconButton>
        </h3>
        </div>
        {show ? <p className="profile-description">{description}</p> : null}
     </CardContent>

     <CardActions>
         <Counter />{editBook} {deleteButton}
      </CardActions>
    </Card>
  );
}
