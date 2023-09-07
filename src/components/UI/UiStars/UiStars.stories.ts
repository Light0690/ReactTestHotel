import type { Meta } from "@storybook/react";
import UiStars from "./UiStars";

const meta = {
  component: UiStars,
} satisfies Meta<typeof UiStars>;

export default meta;

export const Example = {
  args: {
    stars: 3,
  },
} satisfies Meta<typeof UiStars>;
