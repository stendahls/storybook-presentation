import { Meta, StoryObj } from "@storybook/react";
import Presentation from "./Presentation";
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6';
import slides from "./data";

const meta: Meta<typeof Presentation> = {
  title: "Misc/Presentation",
  component: Presentation,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [withRouter],
};

export default meta;

export const Example: StoryObj<typeof Presentation> = {
  args: {
    slides,
  },
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { slideNumber: 1 },
      },
      routing: {
        path: "/slides/:slideNumber/:detailsNumber?",
      }
    })
  },
}; 
