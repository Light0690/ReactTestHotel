import { formattingDate, getNowDate, addMonthToDate } from "./date";

describe("formattingDate", () => {
  test("корректные параметры", () => {
    const date = new Date(2001, 4, 24);
    expect(formattingDate(date)).toBe(`2001-04-24`);
  });

  test("некорректные параметры", () => {
    const date = "";

    expect(() => {
      formattingDate(date as unknown as Date);
    }).toThrow();
  });
});

describe("getNowDate", () => {
  test("корректные параметры", () => {
    expect(getNowDate()).toMatch(/\d+-\d+-\d+/);
  });
});

describe("addMonthToDate", () => {
  test("корректные данные", () => {
    expect(addMonthToDate("2001-04-24")).toBe("24 апреля 2001");
  });

  test("пустая строка", () => {
    expect(addMonthToDate("")).toBe("ошибка параметров");
  });

  test("некорректные параметры", () => {
    const date = null;

    expect(() => {
      addMonthToDate(date as unknown as string);
    }).toThrow();
  });
});
