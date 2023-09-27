import { StorybookConfig } from "@storybook/react-vite";

const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-storysource",
    "storybook-addon-react-router-v6",
    "@storybook/addon-a11y",
    "@storybook/addon-storysource",
    "storybook-addon-rtl",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
} satisfies StorybookConfig;

export default config;
