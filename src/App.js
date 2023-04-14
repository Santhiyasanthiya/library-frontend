import React, { useEffect, useState } from "react";
import  { User } from "./User";
import './App.css'
import { LibraryList } from "./LibraryList";
import { AddColor } from "./AddColor";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import NotFound from "./NotFound";
import AddBook from "./AddBook";
import LibraryDetails from "./LibraryDetails";
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { ThemeProvider } from "@emotion/react";
import { Paper, createTheme } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Login from "./Login";
import EditBook from "./EditBook";

function App(){
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const [book, setBook] = useState([])
  const navigate = useNavigate()



return(
  <ThemeProvider theme={darkTheme}>
         <Paper 
         style={{minHeight : "100vh", borderRadius:"0%"}} elevation={5} >

  <div className="App">

<AppBar position="static">
<Toolbar>
     <Button color="inherit" onClick={()=>navigate("/login")}>LOGIN</Button>

  <Button color="inherit" onClick={()=>navigate("/")}>Home</Button>
  <Button color="inherit" onClick={()=>navigate("/library")} > Library</Button>
  <Button color="inherit" onClick={()=>navigate("/library/add")}>Add-book</Button>
  <Button color="inherit" onClick={()=>navigate("/color-game")}>Color-Game</Button>
 
       <Button 
      sx={{marginLeft:"auto"}}
      startIcon={mode === 'dark' ? 
      <Brightness7Icon /> : <Brightness4Icon />} 
      color="inherit" 
      onClick={()=>setMode(mode === "light" ? "dark" : "light")}>
        {mode === "light" ? "Dark" :"light"} Mode
        </Button>
  </Toolbar>
     </AppBar>

       <Routes>

         <Route path="/" element={<Home />} />
         <Route path="/library" element={<LibraryList  book={book} setBook={setBook} />} />
        <Route path="library/add" element={<AddBook book={book} setBook={setBook}/>} />
        <Route path="/library/details/:id" element={<LibraryDetails book={book} setBook={setBook} />} />
         <Route path="/color-game" element={<AddColor/>} />
         <Route path="*" element={<NotFound/>} />
         <Route path="/books" element={ <Navigate replace to ="/library" />} />
         <Route path="/login" element={<Login/>} />
         <Route path="/editbook/:id" element={<EditBook/>} />
       </Routes>

  </div>
  </Paper>
  </ThemeProvider>
)
}
export default App
