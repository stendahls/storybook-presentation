import { Preview } from "@storybook/react";
import withApp from "../src/storybook/with-app";
import { initializeRTL } from "storybook-addon-rtl";
import { initialize, mswLoader } from 'msw-storybook-addon';

initialize();
initializeRTL();

const preview = {
  decorators: [withApp],
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: {
        order: ["Design Tokens", "Components", "*"],
      },
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
} satisfies Preview;

export default preview;
