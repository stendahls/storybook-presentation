import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from '@storybook/testing-library';
import { expect } from "@storybook/jest";
import VotingForm from "./VotingForm";

const meta: Meta<typeof VotingForm> = {
  component: VotingForm,
};

export default meta;

export const Example: StoryObj<typeof VotingForm> = {};

export const SubmissionExample: StoryObj<typeof VotingForm> = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Open Form", async () => {
      const button = canvas.getByText("Click here to vote");
      await userEvent.click(button, {
        delay: 1000,
      });
    });

    await step("Submit Vote", async () => {
      const input = canvas.getByLabelText("Enter your name:");
      await userEvent.type(input, "Markus", {
        delay: 100,
      });

      const yesButton = canvas.getByText("Yes");
      await userEvent.click(yesButton, {
        delay: 1000,
      });
    });

    expect(canvas.getByText("Markus voted: Yes")).toBeInTheDocument();
  },
}; 