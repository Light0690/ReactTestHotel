import type { Meta, StoryObj } from "@storybook/react";
import UiAlert from "./UiAlert";

const meta = {
  component: UiAlert,
} satisfies Meta<typeof UiAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {},
} satisfies Meta<typeof UiAlert>;
