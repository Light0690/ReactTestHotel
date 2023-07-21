import type { Meta, StoryObj } from "@storybook/react";
import UiFormInput from "./UiFormInput";

const meta = {
  component: UiFormInput,
} satisfies Meta<typeof UiFormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Email = {
  args: {
    name: "email",
    type: "email",
    title: "Почта",
    onChange: () => console.log(1),
    onBlur: () => console.log(1),
    value: "test@mail.ru",
    errors: undefined,
    touched: undefined,
  },
} satisfies Meta<typeof UiFormInput>;

export const WithError = {
  args: {
    name: "email",
    type: "email",
    title: "Почта",
    onChange: () => console.log(1),
    onBlur: () => console.log(1),
    value: "",
    errors: "*ошибка",
    touched: true,
  },
} satisfies Meta<typeof UiFormInput>;
