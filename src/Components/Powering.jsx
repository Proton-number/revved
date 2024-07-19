import React from "react";
import { Typography, Box, IconButton, Stack } from "@mui/material";
import man from "/src/assets/Frame 51.png";
import racers from "/src/assets/Racers.png";
import engine from "/src/assets/engine.png";

const images = [
  {
    img: `${man}`,
    alt: "man",
    work: "ENGINE TURNING",
    about:
      "We fine-tune engines to maximize power and efficiency, ensuring your car delivers peak performance on the track. Our custom tuning solutions are tailored to meet the unique demands of each vehicle and driver.",
  },
  {
    img: `${racers}`,
    alt: "racers",
    work: "TRACKSIDE ASSISTANCE",
    about:
      "Providing on-the-spot technical support and adjustments during race events. Our expert technicians are on hand to diagnose and resolve any issues that arise during the race, ensuring your car remains competitive. From mechanical adjustments to electronic fine-tuning, we provide immediate solutions to keep you in the race.",
  },
  {
    img: `${engine}`,
    alt: "engine",
    work: "TURBO CHARGING",
    about:
      "Experience the thrill of unmatched acceleration with our advanced turbocharging systems. We install and optimize turbochargers to provide a powerful boost, ensuring your car runs faster and smoother. Our expertise in turbo technology guarantees that your vehicle delivers explosive power precisely when you need it.",
  },
];

function Powering() {
  return (
    <Stack
      sx={{ padding: { xs: "80px", lg: "100px", backgroundColor: "black" } }}
      spacing={10}
    >
      <Stack>
        <Typography
          sx={{ fontSize: "14px", color: "#FF5C00", textAlign: "left" }}
        >
          WHAT WE DO
        </Typography>

        <Typography sx={{ fontSize: "75px", width: { lg: "50%" } }}>
          Powering Racing Dreams
        </Typography>
        <Typography
          sx={{ fontWeight: "300px", width: { lg: "50%" } }}
          variant="h6"
        >
          Radical innovation characterizes the all-new Granturismo, but the
          principle behind that evaluation has remained constant since day one.
          Because icons aren't born overnight.
        </Typography>
      </Stack>

      <Stack direction="row" spacing={3}>
        {images.map((image, index) => (
          <React.Fragment key={index}>
            <Stack spacing={2}>
              <Box
                component="img"
                src={image.img}
                alt={image.alt}
                sx={{ width: "480px", height: "400px", objectFit: "cover" }}
              />
              <Typography sx={{ color: "#FF5C00" }}>.{image.work}</Typography>
              <Typography variant="subtitle2" sx={{ width: "80%" }}>
                {image.about}
              </Typography>
            </Stack>
          </React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
}

export default Powering;
