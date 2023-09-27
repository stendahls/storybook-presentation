import { ImageSlideProps } from "../ImageSlide/ImageSlide";
import type { IntroSlideProps } from "../IntroSlide/IntroSlide";
import IntroSlide from "../IntroSlide/IntroSlide";
import { ItemDetailsSlideProps } from "../ItemDetailsSlide/ItemDetailsSlide";
import SplitSlide, { SplitSlideProps } from "../SplitSlide/SplitSlide";
import TextSlide, { TextSlideProps } from "../TextSlide/TextSlide";

export type Slide = 
  | IntroSlideProps
  | SplitSlideProps
  | TextSlideProps
  | ImageSlideProps
  | ItemDetailsSlideProps;

export type SlideRendererProps = {
  slide: Slide;
};

const SlideRenderer = ({
  slide,
}: SlideRendererProps) => {
  switch (slide.type) {
    case "intro":
      return <IntroSlide {...slide} />
    case "split":
      return <SplitSlide {...slide} />
    case "text":
      return <TextSlide {...slide} />
  }
};

export default SlideRenderer;