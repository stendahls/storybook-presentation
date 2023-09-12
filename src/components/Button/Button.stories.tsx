import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

export const Example: StoryObj<typeof Button> = {
  args: {
    text: "Click me",
  },
}; 
