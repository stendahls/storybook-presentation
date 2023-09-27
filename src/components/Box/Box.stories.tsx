import { Meta, StoryObj } from "@storybook/react";
import Box from "./Box";
import Typography from "../Typography/Typography";

const meta: Meta<typeof Box> = {
  component: Box,
};

export default meta;

export const Example: StoryObj<typeof Box> = {
  args: {
    backgroundColor: "primary",
    color: "white",
    br: 4,
    px: 40,
    py: 30,
  },
  render: (args) => <Box {...args}><Typography>I'm a box!</Typography></Box>
}; 
