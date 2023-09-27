import { Preview } from "@storybook/react";
import withApp from "../src/storybook/with-app";
import { initializeRTL } from "storybook-addon-rtl";

initializeRTL();

const preview = {
  decorators: [
    withApp,
  ],
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
} satisfies Preview;

export default preview;
