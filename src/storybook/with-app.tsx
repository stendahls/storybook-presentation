
import type { Decorator } from "@storybook/react";
import App from "../App";

const withApp: Decorator = (Story) => (
  <App>
    <Story />
  </App>
);

export default withApp;