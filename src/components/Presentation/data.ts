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
### Hi!
  - Software developer since 2005
  - Both backend and frontend.
  - .NET, Javascript, Typescript
  - Every possible framework since…

#### Doing projects for:
  - Volvo, Husqvarna, Volvo Cars, ICA, Absolut…

#### Last 3 years:
  - React, Typescript and Storybook for Husqvarna
`,
  },
  {
    type: "split",
    title: "What are we going to do?",
    subTitle: "",
    content: `
### Session 1
- What is and when do you want to use Storybook?
- The basics; Installation and writing stories.
- Args and Controls.
- Decorators

### Session 2
- Addons & Integrations
- Play function
- Testing Components.
- Storybook Composition
- Chromatic

### Session 3
- Refresher?
- Exercise: Building an UI from a design system with Storybook.

### Session 4
- Exercise: Building an UI from a design system with Storybook.
`,
  },
  {
    type: "split",
    title: "What is Storybook?",
    content: `
Storybook is a **Frontend Workshop** for developing UI in **isolation**.

#### Storybook helps with…
- Makes UI development easier
- Helps with testing and documenting components
- Speeds up collaboration and iteration
- Allows for reusing and scaling UI components
- Makes complex projects easier to maintain and manage
- Makes UIs look better and more interactive
- Increases efficiency and productivity in development workflow
`
  },
  {
    type: "split",
    title: "Where can Storybook be used?",
    content: `
Storybook can be used together with various frameworks:
  - React
  - Angular
  - Vue
  - Ember
  - Svelte
  - Web Components
  - HTML (no framework)

Together with bundlers:
  - Vite
  - Webpack
  - Svelte
`
  },
  {
    type: "split",
    title: "When does Storybook really shine?",
    content: `
  1. **Big** projects with many developers.
  2. Component Library Projects.
  3. Design System implementation.
  3. All type of situations where UI components is delivered to backend or other teams.
`
  },
  {
    type: "split",
    title: "Any downsides?",
    content: `
- Slight learning curve, mainly getting into the mindset.
- Earlier versions was a bit unstable.
- Additional thing to maintain; the stories and their data
- Documenting "non components" is hard, with no standard way.
`
  },
  {
    type: "split",
    title: "You're looking at it.",
    content: `
### This is Storybook.
I built this presentation as a modular UI using Storybook.

I'm terrible at Power Point or Pages, so why not build the presentation as a web app
and test some new tech at the same time.

[Let's look briefly how it looks](http://localhost:6006/)

We'll look at the source code later.
[source code](https://github.com/ullmark/storybook-presentation)
`
  },
  {
    type: "split",
    title: "Other examples",
    content: `
### There are obviously better examples.
These are two examples (amongst others) that Storybook themself promote that can 
be inspirational on what you can do.

  - [Grainger](https://gds.grainger.com/?path=/story/welcome--page)
  - [Oniru](https://design-system.atoka.io/?path=/story/introduction-welcome--page)
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
After initial setup, start with:
~~~bash
npm run storybook
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
all files that has the file ending \`*.stories.tsx\`. Below is the *bare minumum*:

~~~~tsx
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

// the meta describes details about story rendering 
// and placement.
const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

// The actual "story".
export const Example: StoryObj<typeof Button> = {}; 
~~~~
`
  },
  {
    type: "split",
    title: "Writing Stories",
    subTitle: "Decorators", 
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
    title: "Writing Stories",
    subTitle: "Parameters",
    content: `
Parameters in Storybook are used to customize component behavior and appearance during development and testing, enhancing the development workflow.
~~~~tsx
// Button.stories.ts|tsx

// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
};
~~~~
`
  },
  {
    type: "split",
    title: "Writing Stories",
    subTitle: "More advanced: CSF",
    docsLink: "http://localhost:6006/?path=/story/components-button--counter",
    content: `
~~~~tsx
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { useCallback, useState } from "react";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button"
};

export default meta;

const ButtonWithCounter = () => {
  const [count, setCount] = useState(0);
  const onClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  return (
    <div>
      <p>{\`clicked: \${count}\`}</p>
      <Button text="Click" onClick={onClick} />
    </div>
  );
};

export const Counter: StoryObj<typeof ButtonWithCounter> = {
  name: "Counter Button",
  decorators: [
    (Story) => <article css={{ border: "solid 2px red", padding: 10 }}><Story /></article>, 
    (Story) => <section css={{ border: "solid 2px blue", padding: 10 }}><Story /></section>,
  ],
  parameters: {
    layout: "padded",
  },
  render: (args) => <ButtonWithCounter />,
};
~~~~
`
  },
 
  {
    type: "split",
    title: "Writing Stories",
    subTitle: "MDX",
    docsLink: "https://storybook.js.org/docs/react/writing-stories/introduction",
    content: `
**MDX** is a file format that combines [Markdown](https://daringfireball.net/projects/markdown/syntax) and JSX. This might becoming
a deprecated way of writing stories.

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
    title: "Writing Stories",
    subTitle: "Best of both; CSF & MDX",
    content: `
One (new) possibility is to create a mdx-file next to the CSF-file with the same name,
excluding ".stories". Storybook then automatically picks it up and displays as "Docs".

![](/images/mdx-csf.jpg)
`
  },
  {
    type: "split",
    title: "Structuring your files and Stories",
    content: `
The story-files can be placed anywhere and many favor (and the default) setup you get after the installation is to place them 
within a "stories" folder. 

Personally I like placing them next to the component it describes, everything neat and tidy.

![](/images/story-placement.jpg)
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
    title: ".storybook/main.[tj]s",
    subTitle: "Configure Storybook itself",
    docsLink: "https://storybook.js.org/docs/react/configure/overview",
    content: `
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
    title: ".storybook/preview.[tj]s",
    subTitle: "Configure the preview of your stories",
    docsLink: "https://storybook.js.org/docs/react/configure/overview",
    content: `
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
    title: "Configure the HTML",
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
    content: `
End of Session 1.
=================
If there is time, try setting up a Storybook installation and start a couple of stories.
`,
  },
  {
    type: "split",
    content: `
Session 2
======================
- Addons & Integrations
- Play function
- Testing Components.
- Storybook Composition
- Chromatic
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

![](/images/addons.jpg)
`
  },
  {
    type: "split",
    title: "Addon: MSW",
    subTitle: "Mocking XHR",
    content: `
### Pretty soon, your components need to fetch/post data.
- You should try not adding external dependencies to your Storybook. Makes it much more error prone.
- You want to be able simulate latency to test loading animations etc.
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
    title: "Addon: Chromatic",
    subTitle: "Testing, reviewing, approval",
    docsLink: "https://www.chromatic.com/",
    docsType: "chromatic",
    content: `
Chromatic is a powerful application developed by the creators of Storybook. It serves as a comprehensive solution for identifying UI regressions and streamlining the stakeholder approval process.

![](/images/chromatic-term.jpg)
`
  },
  {
    type: "split",
    title: "Any questions?",
    content: `
Before starting to build with Storybook, anything unclear?
Any other random question?
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