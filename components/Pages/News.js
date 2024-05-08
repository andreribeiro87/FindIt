import Card from "@mui/joy/Card";

import React, { useEffect } from "react";
import { Slide } from "@mui/material";
import Image from "next/image";
import Button from "@mui/joy/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function News() {
  const images = ["../findit-high-resolution-logo.png", "../"];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(function () {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Slide direction="right" in={true} timeout={500}>
      <Card
        color="white"
        variant="soft"
        sx={{
          boxShadow: "lg",
          position: "absolute",
          top: "2%",
          left: 0,
          right: 0,
          margin: "auto",
          maxWidth: "85%",
          height: "80%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            overflow: "hidden",
            transition: "ease-in-out 2px",
          }}
        >
          <Image
            src={`/images/${images[activeIndex]}`}
            alt={`Slide ${activeIndex}`}
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
        <Button
          color="neutral"
          size="lg"
          variant="plain"
          onClick={handlePrev}
          id="next"
          sx={{
            position: "absolute",
            top: "50%",
            left: 10,
            transform: "translateY(-50%)",
          }}
        >
          <ArrowBackIosNewIcon />
        </Button>
        <Button
          color="neutral"
          size="lg"
          variant="plain"
          onClick={handleNext}
          id="prev"
          sx={{
            position: "absolute",
            top: "50%",
            right: 10,
            transform: "translateY(-50%)",
          }}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Card>
    </Slide>
  );
}
