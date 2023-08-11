import type { Meta, StoryObj } from "@storybook/react";
import UiFormButton from "./UiFormButton";

const meta = {
  component: UiFormButton,
} satisfies Meta<typeof UiFormButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    disabled: false,
    title: "example",
  },
} satisfies Meta<typeof UiFormButton>;

export const Disabled = {
  args: {
    disabled: true,
    title: "example",
  },
} satisfies Meta<typeof UiFormButton>;
