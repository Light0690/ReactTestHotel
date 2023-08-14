import type { Meta, StoryObj } from "@storybook/react";
import UiLoading from "./UiLoading";

const meta = {
  component: UiLoading,
} satisfies Meta<typeof UiLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Black = {
  args: {
    theme: "black",
    isShadow: false,
  },
} satisfies Meta<typeof UiLoading>;

export const White = {
  args: {
    theme: "white",
    isShadow: false,
  },
} satisfies Meta<typeof UiLoading>;

export const Blue = {
  args: {
    theme: "blue",
    isShadow: false,
  },
} satisfies Meta<typeof UiLoading>;

export const Shadow = {
  args: {
    theme: "blue",
    isShadow: true,
  },
} satisfies Meta<typeof UiLoading>;
