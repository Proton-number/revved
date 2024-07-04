import { Typography, Box, IconButton, Stack } from "@mui/material";
import React from "react";
import image1 from "/src/assets/Race car 1.png";
import image2 from "/src/assets/Race car 2.png";

const images = [
  {
    img: `${image1}`,
    alt: "Race car 1",
  },

  {
    img: `${image2}`,
    alt: "Race car 2",
  },
];


function Raptor() {
  return (
    <Stack sx={{ padding: "100px" }} spacing={10}>
      <Stack>
        <Typography
          sx={{ fontSize: "14px", color: "#FF5C00", textAlign: "left" }}
        >
          WHAT'S NEW
        </Typography>
        <Stack>
          <Typography sx={{ fontSize: "75px" }}>Raptor Hurricane v7</Typography>
          <Typography sx={{ fontSize: "75px" }}>-Dragon</Typography>
        </Stack>
        <Typography sx={{ fontWeight: "300px", width: "50%" }} variant="body2">
          At Revved, we live and breathe racing. Founded by dedicated automative
          enthusiasts and engineers, we transform high-performance cars into
          track-ready champions.
        </Typography>
      </Stack>

      <Stack direction="row" spacing={12}>
        {images.map((image, index) => (
          <React.Fragment key={index}>
            <Box
              component="img"
              src={image.img}
              sx={{ width: { lg: "900px" }, height: { lg: "600px" } }}
            />
          </React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
}

export default Raptor;