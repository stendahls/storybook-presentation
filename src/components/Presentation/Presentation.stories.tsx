import { Meta, StoryObj } from "@storybook/react";
import Presentation from "./Presentation";
import Typography from "../Typography/Typography";

const meta: Meta<typeof Presentation> = {
  component: Presentation,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Example: StoryObj<typeof Presentation> = {
  args: {
    dataUrl: "/presentation.json",
  },
}; 
