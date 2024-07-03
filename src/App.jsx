import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Top from "./Components/Top";
import { createTheme, ThemeProvider } from "@mui/material";

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
      </ThemeProvider>
    </>
  );
}

export default App;
