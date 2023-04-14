import React, { useEffect, useState } from "react";
import { User } from "./User";
import IconButton from "@mui/material/IconButton";
import { TextField } from "@mui/material";
import Book from "./Book";
import { AddBook } from "./AddBook";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { useNavigate } from "react-router-dom";

export function LibraryList() {
  const [book, setBook] = useState([]);
  const navigate=useNavigate()

  const getBooks = () => {
    fetch("https://63baa34a56043ab3c7a03783.mockapi.io/library", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setBook(mvs));
  };

  useEffect(() => {
    getBooks();
  }, []);

  const deleteBook = (DeleteId) => {
    fetch(`https://63baa34a56043ab3c7a03783.mockapi.io/library/${DeleteId}`, {
      method: "DELETE",
    })
    .then((data) => getBooks());
    console.log(DeleteId);
  };

  return (
    <div>

      <div className="library-container">
        {book.map((list) => (
          <div key={list.id}>
            <Book
              pic={list.pic}
              title={list.title}
              description={list.description}
              id={list.id}

              editBook={
                <IconButton
                sx={{marginLeft:"auto"}} 
                aria-label="editbook" 
                onClick={() =>navigate(`/editbook/${list.id}`)}
                  >
                <DriveFileRenameOutlineIcon  color="secondray" />
                </IconButton>
              }

              deleteButton={
                <IconButton
                  sx={{ marginLeft: "auto" }}
                  aria-label="delete"
                  onClick={() => deleteBook(list.id)}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
