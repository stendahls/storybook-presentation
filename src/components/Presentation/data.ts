import { Slide } from "./SlideRenderer";

const data = [
  {
    type: "intro",
    title: "Building Modular UI:s",
    subTitle: "Storybook 7 & Chromatic",
    imageSrc: "/images/storybook-icon.svg"
  },
  {
    type: "split",
    title: "Markus Ullmark",
    subTitle: "Stendahls",
    content: `
  - Software developer since 2005
  - Both backend and frontend.
  - .NET, Javascript, Typescript

#### Last 3 years:
  - React, Typescript, Storybook
`,
  },
  {
    type: "split",
    title: "What is Storybook?",
    content: `
Storybook is a **Frontend Workshop** for developing UI in **isolation**.

#### Storybook helps with…
- Streamlines UI development process
- Enables efficient component testing and documentation
- Facilitates rapid iteration and collaboration
- Promotes reusability and scalability of UI components
- Simplifies maintenance and management of complex projects
- Supports a wide range of frameworks and libraries
- Enhances visual appeal and interactivity of UIs
- Improves efficiency and productivity in development workflow
`
  },
  {
    type: "split",
    title: "Downsides?",
    content: `
- Slight learning curve, mainly getting into the mindset.
- Earlier versions was a bit unstable.
- Additional thing to maintain; the stories and their data
`
  },
  {
    type: "split",
    title: "I built this presentation in storybook",
    subTitle: "as modular UI",
    content: `
### What can possibly go wrong?
Being a developer I thought; I'm crap at doing presentations… Why not built it
in Storybook? 🤯

[Let's look briefly how it looks](http://localhost:6006/)

We'll look at the source code later.
[source code](https://github.com/ullmark/storybook-presentation)
`
  },
  {
    type: "split",
    title: "Installation",
    docsLink: "https://storybook.js.org/docs/react/get-started/install",
    content:`
Should be run on existing projects, not empty folders.
~~~bash
npx storybook@latest init
~~~
`
  },
  {
    type: "split",
    title: "Writing Stories",
    subTitle: "The basics: CSF",
    docsLink: "https://storybook.js.org/docs/react/writing-stories/introduction",
    content: `
**CSF** stands for **C**omponent **S**tory format. Storybook by default (can be configured) works by finding 
all files that has the file ending \`*.stories.tsx\`.
~~~~tsx
// Button.stories.ts|tsx

import type { Meta } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
~~~~
`
  },
  {
    type: "split",
    title: "Writing Stories",
    subTitle: "The basics: MDX",
    docsLink: "https://storybook.js.org/docs/react/writing-stories/introduction",
    content: `
**MDX** is a file format that combines [Markdown](https://daringfireball.net/projects/markdown/syntax) and JSX.
~~~mdx
import {Meta, Story, Canvas} from "@storybook/addon-docs";
import { breakpoints } from "./breakpoints";

<Meta title="Design Tokens/Breakpoints" />

Breakpoints
======================
In web development, breakpoints are specific screen sizes where the layout and design of a website are optimized for different devices. 
They are used in responsive web design to ensure that the website adapts and displays correctly on various screens, like desktops, tablets, 
and mobile phones. Breakpoints allow developers to make adjustments to the design and layout depending on the screen size, ensuring an 
optimal user experience across devices.

Our breakpoints
---------------
<ul>
{breakpoints.map((bp) => (
  <li>{bp}</li>
))}
</ul>
~~~
`
  },
  {
    type: "split",
    title: "Configuration",
    docsLink: "https://storybook.js.org/docs/react/configure/overview",
    content: `
Almost everything can be configured in Storybook, but the defaults are generally enough. 
You can also change the look of Storybook itself, but we wary of making it look like the website you are developing.
    `,
  },
  {
    type: "split",
    title: "main.[tj]s",
    docsLink: "https://storybook.js.org/docs/react/configure/overview",
    content: `
### Configure Storybook itself.
main.js (or main.ts) is a configuration file used in Storybook to customize and control the behavior of the development environment. It allows developers to set up addons, configure webpack, and define global parameters for their Storybook components.
~~~ts
import { StorybookConfig } from "@storybook/react-vite";

const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
  ],
  framework: {
    name: "@storybook/react-vite",
  },
  docs: {
    autodocs: "tag",
  },
} satisfies StorybookConfig;

export default config;
~~~
    `,
  },
  {
    type: "split",
    title: "preview.[tj]s",
    docsLink: "https://storybook.js.org/docs/react/configure/overview",
    content: `
### Configure the preview of your stories
preview.js (or preview.ts) is a configuration file used in Storybook to customize the UI and behavior of the component preview pane. It allows developers to import global styles, configure decorators for components, and define global parameters that affect how components are rendered in Storybook.
~~~~ts
const preview = {
  decorators: [withApp],
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
~~~~
    `
  },
  {
    type: "split",
    title: "Decorators",
    content: `
Decorators in Storybook allow you to wrap components with additional functionality, such as adding props or altering behavior.
~~~ts
import type { Decorator } from "@storybook/react";
import App from "../App";

const withApp: Decorator = (Story) => (
  <App>
    <Story />
  </App>
);

export default withApp;
~~~
`
  },
  {
    type: "split",
    title: "Parameters",
    content: `
Parameters in Storybook are used to customize component behavior and appearance during development and testing, enhancing the development workflow.
`
  },
  {
    type: "split",
    title: "HTML",
    content: `
### \`previewHead\` & \`preview-head.html\`
Allows you to add elements rendered in the <head> of the preview panel of a story. Useful for ex. loading external
fonts, stylesheets etc.

### \`previewBody\` & \`preview-body.html\`
Allows you to add elements in the \`<body>\` of the preview of a story. Useful for ex. adding elements that might be required for your application
to work.
`
  },
  {
    type: "split",
    title: "Addons/Integrations",
    docsLink: "https://storybook.js.org/integrations/",
    content: `
- Storybook addons are extensions that enhance the functionality of the Storybook development environment.
- They provide additional features like live editing, code snippets, and documentation generation.
- Addons allow customization and extension of Storybook's UI and behavior.
- They streamline the development process by providing useful tools and utilities for building and showcasing UI components.    
`
  },
  {
    type: "split",
    title: "Component testing",
    content: `

`
  },
  {
    type: "split",
    title: "Chromatic",
    content: `
`
  },
  {
    type: "text",
    title: "Any questions?",
    content: `
    `
  },
  {
    type: "split",
    title: "Exercise",
    content: `
![](/images/stone-valley.jpg)

Setup a Storybook with framework of your choosing. Have a look at [Stone Valley Design System](https://www.figma.com/file/UTmWQEoZu5Z5tZkDOCXzr4/Stone-Valley-Design-System?node-id=10%3A170&mode=dev) 
and start implementing its components and/or Design Tokens. 

Pick a component ex. Button, and start implementing it as stories.

For reference or inspiration, have a look at [this Storybooks source](/)
    `,
  }
] satisfies Slide[];

export default data;