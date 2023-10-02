import { Meta, StoryObj } from "@storybook/react";
import Dialog from "./Dialog";
import Typography from "../Typography/Typography";

const meta: Meta<typeof Dialog> = {
  component: Dialog,
};

export default meta;

export const Example: StoryObj<typeof Dialog> = {
  args: {
    open: false,
    children: (
      <Typography>Hello world!</Typography>
    )
  },
  argTypes: {
    children: {
      control: false,
    }
  }
}; 
