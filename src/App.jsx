import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Top from "./Components/Top";
import { createTheme, ThemeProvider } from "@mui/material";
import Raptor from "./Components/Raptor";
import Powering from "./Components/Powering";

const theme = createTheme({
  typography: {
    fontFamily: "Outfit, sans-serif",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav />
        <Top />
        <Raptor />
        <Powering />
      </ThemeProvider>
    </>
  );
}

export default App;
