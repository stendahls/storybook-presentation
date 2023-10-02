import { Meta, StoryObj } from "@storybook/react";
import SplitSlide from "./SplitSlide";

const meta: Meta<typeof SplitSlide> = {
  component: SplitSlide,
  parameters: {
    layout: "fullscreen",
  }
};

export default meta;

export const Example: StoryObj<typeof SplitSlide> = {
  args: {
    title: "Lorem ipsum",
    subTitle: "Sit dolor",
    content: `
# Some Markdown.
`
  }
}; 
