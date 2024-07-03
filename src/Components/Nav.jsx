import React from "react";
import { Box, AppBar, Toolbar, Button, Typography, Stack } from "@mui/material";
import logo from "../assets/Vector.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";

const MotionEndIcon = motion(ArrowForwardIosIcon);

function Nav() {
  return (
    <AppBar id="desktopNav" sx={{ backgroundColor: "black", padding: "10px" }}>
      <Toolbar>
        <Stack
          direction="row"
          sx={{ alignItems: "center", flexGrow: { xs: 3, lg: 1 } }}
          spacing={2}
        >
          <Box component="img" src={logo} />

          <Typography
            sx={{
              fontSize: { lg: "24px" },
              fontWeight: "400px",
            }}
          >
            REVVED
          </Typography>
        </Stack>

        <Stack
          direction="row"
          sx={{ alignItems: "center", flexGrow: { xs: 1, lg: 0.2 } }}
          spacing={{ xs: 3, lg: 8 }}
        >
          <Typography
            component={motion.p}
            whileHover={{ opacity: "70%" }}
            variant="body2"
            sx={{ cursor: "pointer" }}
          >
            ABOUT US
          </Typography>
          <Typography
            component={motion.p}
            whileHover={{ opacity: "70%" }}
            variant="body2"
            sx={{ cursor: "pointer" }}
          >
            SERVICES
          </Typography>
          <Typography
            component={motion.p}
            whileHover={{ opacity: "70%" }}
            variant="body2"
            sx={{ cursor: "pointer" }}
          >
            GALLERY
          </Typography>
          <Typography
            component={motion.p}
            whileHover={{ opacity: "70%" }}
            variant="body2"
            sx={{ cursor: "pointer" }}
          >
            TESTIMONIALS
          </Typography>
        </Stack>

        <Button
          variant="contained"
          disableElevation
          endIcon={<MotionEndIcon whileHover={{ x: 10 }} />}
          sx={{
            backgroundColor: "#D04B00",
            borderRadius: 0,
            padding: "18px, 24px, 18px, 24px",
            height: { xs: "40px", lg: "54px" },
            width: { lg: "212px" },
            "&:hover": {
              backgroundColor: "#B84100",
            },
          }}
        >
          {" "}
          CONTACT US
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
