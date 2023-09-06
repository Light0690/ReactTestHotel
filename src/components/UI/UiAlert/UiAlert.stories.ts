import type { Meta } from "@storybook/react";
import UiAlert from "./UiAlert";

const meta = {
  component: UiAlert,
} satisfies Meta<typeof UiAlert>;

export default meta;

export const Example = {
  args: {},
} satisfies Meta<typeof UiAlert>;
