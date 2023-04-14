import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

function Counter() {
  const [like, setLike] = useState(15);
  const [disLike, setDisLike] = useState(5);

  const increamentLike = () => setLike(like + 1);

  const increamentDisLike = () => setDisLike(disLike + 1);

  useEffect(()=>{
    console.log(like)
  },[like, disLike])

  return (
    <div>
      <IconButton aria-label="like">
        <Badge badgeContent={like} color="primary" onClick={increamentLike}>
          👍
        </Badge>
      </IconButton>

      <IconButton aria-label="dislike">
        <Badge badgeContent={disLike} color="error" onClick={increamentDisLike}>
          👎
        </Badge>
      </IconButton>
    </div>
  );
}

export default Counter;
