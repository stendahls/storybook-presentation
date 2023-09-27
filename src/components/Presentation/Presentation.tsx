import { Suspense, useMemo, useRef } from "react";
import { useKeyDown } from "../../hooks/useKeyDown/useKeyDown";
import Box from "../Box/Box";
import SlideRenderer, { Slide } from "./SlideRenderer";
import { useNavigate, useParams } from "react-router-dom";

export type PresentationProps = {
  slides: Slide[];
};

const Presentation = ({
  slides,
}: PresentationProps) => {
  const { slideNumber } = useParams();
  const navigate = useNavigate();
  const slideIndex = useRef<number>(0);

  useKeyDown("ArrowRight", () => { navigate(`/slides/${slideIndex.current + 2}`) });
  useKeyDown("ArrowLeft", () => { navigate(`/slides/${slideIndex.current}`) });

  slideIndex.current = useMemo(() => {
    if (!slideNumber) { return 0 }
    return (Number.parseInt(slideNumber) ?? 1) - 1;
  }, [slideNumber]);

  return (
    <Box as="main" backgroundColor="black" width="100vw" height="100vh" justifyContent="center" alignItems="center">
      <Suspense>
        <Box width="100%" aspectRatio={16/9}>
          {slides[slideIndex.current] && (
            <SlideRenderer slide={slides[slideIndex.current]} />
          )}
        </Box>
      </Suspense>
    </Box>
  );
};

export default Presentation;