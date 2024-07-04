import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import player from "../assets/Frame 6.png";
import { motion } from "framer-motion";
import Logos from "./Logos";

const svgVariants = {
  hover: {
    x: 10,
  },
  rest: {
    x: 0,
  },
};

function Top() {
  return (
    <>
      <Box id="main">
        <Stack sx={{ position: "absolute", top: "52%" }}>
          <Stack
            direction="row"
            sx={{ alignItems: "center" }}
            spacing={{ lg: 50 }}
          >
            <Typography>SUMMER RACING SEASON</Typography>
            <Typography>WATCH THE VIDEO</Typography>
            <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
              <Box component="img" src={player} alt="player" />
              <Typography>PLAY VIDEO</Typography>
            </Stack>
          </Stack>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "800px",
              fontSize: { lg: "280px" },
              cursor: "pointer",
            }}
          >
            REVVED
          </Typography>
        </Stack>
        <Stack
          component={motion.div}
          whileHover="hover"
          spacing={2}
          id="racer"
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "34px",
            width: { lg: "244px" },
            height: { lg: "66px" },
            cursor: "pointer",
            position: "absolute",
            top: "14%",
            left: "80%",
          }}
        >
          <Typography>ready to race?</Typography>
          <motion.svg
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={{
              hover: { x: 10 },
            }}
          >
            <rect
              x="1.25977"
              y="1.03186"
              width="41"
              height="41"
              rx="20.5"
              stroke="white"
              stroke-opacity="0.8"
            />
            <path
              d="M12.4268 21.2119C12.4268 20.7689 12.7559 20.4028 13.183 20.3448L13.3018 20.3369H30.8018C31.285 20.3369 31.6768 20.7286 31.6768 21.2119C31.6768 21.6548 31.3476 22.0209 30.9205 22.0789L30.8018 22.0869H13.3018C12.8185 22.0869 12.4268 21.6951 12.4268 21.2119Z"
              fill="white"
              fill-opacity="0.8"
            />
            <path
              d="M23.1268 14.8034C22.7843 14.4624 22.7831 13.9084 23.1241 13.566C23.4341 13.2547 23.9201 13.2254 24.2632 13.4788L24.3615 13.5633L31.4199 20.5913C31.7321 20.9022 31.7605 21.39 31.5051 21.7331L31.4199 21.8314L24.3616 28.8605C24.0192 29.2015 23.4651 29.2004 23.1241 28.858C22.8141 28.5467 22.7869 28.0605 23.0418 27.7185L23.1267 27.6205L29.5621 21.211L23.1268 14.8034Z"
              fill="white"
              fill-opacity="0.8"
            />
          </motion.svg>
        </Stack>
      </Box>
      <Logos />
    </>
  );
}

export default Top;
