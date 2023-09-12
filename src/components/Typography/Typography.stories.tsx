import { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";
import { ComponentProps } from "react";

const meta: Meta<typeof Typography> = {
  component: Typography,
};

export default meta;

type StoryArgs = 
  & ComponentProps<typeof Typography> 
  & { text: string; };

export const Story: StoryObj<StoryArgs> = {
  args: {
    text: "The quick brown fox jumps over the lazy dog",
  },
  render: ({ text, ...rest }) => <Typography {...rest}>{text}</Typography>
};
