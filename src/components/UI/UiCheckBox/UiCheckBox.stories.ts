import type { Meta } from "@storybook/react";
import UiCheckBox from "./UiCheckBox";

const meta = {
  component: UiCheckBox,
} satisfies Meta<typeof UiCheckBox>;

export default meta;

export const checked = {
  args: {
    id: "promo",
    checked: true,
    onChange: () => console.log(1),
    label: "У меня есть промокод",
  },
} satisfies Meta<typeof UiCheckBox>;
export const unChecked = {
  args: {
    id: "promo",
    checked: false,
    onChange: () => console.log(1),
    label: "У меня есть промокод",
  },
} satisfies Meta<typeof UiCheckBox>;
