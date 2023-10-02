import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { useCallback, useState } from "react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

export const Example: StoryObj<typeof Button> = {
  args: {
    text: "Click me",
  },
  argTypes: {
    variant: {
      description: "Another description",
      control: "select"
    }
  }
}; 

const ButtonWithCounter = () => {
  const [count, setCount] = useState(0);
  const onClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  return (
    <div>
      <p>{`clicked: ${count}`}</p>
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


