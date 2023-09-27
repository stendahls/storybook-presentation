import { Meta, StoryObj } from "@storybook/react";
import DocsLink from "./DocsLink";

const meta: Meta<typeof DocsLink> = {
  component: DocsLink,
};

export default meta;

export const Example: StoryObj<typeof DocsLink> = {
  args: {
    url: "https://storybook.js.org/docs/react/get-started/install/",
  },
}; 
