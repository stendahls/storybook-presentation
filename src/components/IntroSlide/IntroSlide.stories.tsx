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
    title: "Building Modular UI:s",
    subTitle: "with Storybook 7",
    imageSrc: "/images/storybook-icon.svg",
  }
}; 
