import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Stack,
  Badge,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import logo from "../assets/Vector.svg";

const theme = createTheme({
  typography: {
    fontFamily: "Bigerside Expanded",
  },
});

function Nav() {
  return (
    <AppBar id="desktopNav" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
          <Box component="img" src={logo} />
          <ThemeProvider theme={theme}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "400px",
                flexGrow: { sm: 2, lg: 0.5 },
              }}
            >
              REVVED
            </Typography>
          </ThemeProvider>
        </Stack>

        <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
          <Typography>ABOUT US</Typography>
          <Typography>SERVICES</Typography>
          <Typography>GALLERY</Typography>
          <Typography>TESTIMONIALS</Typography>
        </Stack>

        <Button variant="contained" disableElevation>
          {" "}
          CONTACT US
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
