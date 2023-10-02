import { Meta, StoryObj } from "@storybook/react";
import IntroSlide from "./IntroSlide";

const meta: Meta<typeof IntroSlide> = {
  component: IntroSlide,
  parameters: {
    layout: "fullscreen",
  }
};

export default meta;

export const Example: StoryObj<typeof IntroSlide> = {
  args: {
    title: "Here's a title",
    subTitle: "and a sub title",
    imageSrc: "/images/storybook-icon.svg",
  }
}; 
