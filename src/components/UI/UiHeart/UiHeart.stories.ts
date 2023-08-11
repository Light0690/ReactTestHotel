import type { Meta, StoryObj } from "@storybook/react";
import UiHeart from "./UiHeart";

const meta = {
  component: UiHeart,
} satisfies Meta<typeof UiHeart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    onClick: () => console.log(1),
    isActive: false,
  },
} satisfies Meta<typeof UiHeart>;

export const Active = {
  args: {
    onClick: () => console.log(1),
    isActive: true,
  },
} satisfies Meta<typeof UiHeart>;
