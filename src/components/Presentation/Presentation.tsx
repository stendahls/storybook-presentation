import { ReactNode, useEffect, useState } from "react";
import { useKeyDown } from "../../hooks/useKeyDown/useKeyDown";
import Box from "../Box/Box";
import SlideRenderer, { Slide } from "./SlideRenderer";

export type PresentationProps = {
  dataUrl: string;
};

const Presentation = ({
  dataUrl,
}: PresentationProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(false);

  useKeyDown("Left", () => {

  });

  useKeyDown("Right", () => {

  });

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      const data = await fetch(dataUrl);
      const json = await data.json();
      setSlides(json);
    }
    loadData()
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box as="main" backgroundColor="black" width="100vw" height="100vh" justifyContent="center">
      {!loading && slides.map((slide, index) => (
        <SlideRenderer key={index} slide={slide} />
      ))}
    </Box>
  );
};

export default Presentation;