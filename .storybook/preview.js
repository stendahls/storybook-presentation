/** @type { import('@storybook/react').Preview } */
import withApp from "../src/storybook/with-app";

const preview = {
  decorators: [
    withApp,
  ],
  parameters: {
    controls: { expanded: true },
    layout: "centered",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
