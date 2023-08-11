import type { Meta, StoryObj } from "@storybook/react";
import UiSortButton from "./UiSortButton";

const meta = {
  component: UiSortButton,
} satisfies Meta<typeof UiSortButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Stars = {
  args: {
    onClick: () => console.log(true),
    title: "Рейтинг",
    desc: true,
    type: "stars",
  },
} satisfies Meta<typeof UiSortButton>;

export const Price = {
  args: {
    onClick: () => console.log(true),
    title: "Цена",
    desc: false,
    type: "priceAvg",
  },
} satisfies Meta<typeof UiSortButton>;
