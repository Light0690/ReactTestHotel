import type { Meta } from "@storybook/react";
import UiButton from "./UiButton";

const meta = {
  component: UiButton,
} satisfies Meta<typeof UiButton>;

export default meta;

export const Example = {
  args: {
    title: "назад",
    onClick: () => console.log(1),
  },
} satisfies Meta<typeof UiButton>;

export const Small = {
  args: {
    title: "назад",
    size: "small",
    onClick: () => console.log(1),
  },
} satisfies Meta<typeof UiButton>;

export const Large = {
  args: {
    title: "назад",
    size: "large",
    onClick: () => console.log(1),
  },
} satisfies Meta<typeof UiButton>;

export const Primary = {
  args: {
    title: "назад",
    size: "large",
    color: "primary",
    onClick: () => console.log(1),
  },
} satisfies Meta<typeof UiButton>;
