import type { Meta, StoryObj } from "@storybook/react";
import UiButton from "./UiButton";

const meta = {
  component: UiButton,
} satisfies Meta<typeof UiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    title: "назад",
    onClick: () => console.log(1),
  },
} satisfies Meta<typeof UiButton>;
