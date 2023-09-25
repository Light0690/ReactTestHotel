import type { Meta } from "@storybook/react";
import UiInput from "./UiInput";

const meta = {
  component: UiInput,
} satisfies Meta<typeof UiInput>;

export default meta;

export const small = {
  args: {
    type: "text",
    onChange: () => console.log(1),
    value: "",
    sizeInput: "small",
  },
} satisfies Meta<typeof UiInput>;

export const large = {
  args: {
    type: "text",
    onChange: () => console.log(1),
    value: "",
    sizeInput: "large",
  },
} satisfies Meta<typeof UiInput>;
