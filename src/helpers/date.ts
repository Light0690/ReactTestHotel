/**
 * Функция принимает дату и возращает её строкой в формате - 0000-00-00
 *
 * @param { Date } date любая дата
 * @returns { string } строка вида 0000-00-00
 */

const formattingDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

  return `${year}-${month}-${day}`;
};

/**
 * Функция, которая возвращает нынешнюю дату, отформатированную функцией formattingDate
 *
 * @returns { string } нынешняя дата, отформатированную функцией formattingDate
 */
export const getNowDate = (): string => {
  const date = new Date();
  const res = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());

  return formattingDate(res);
};

/**
 * Функция, заменяющая номер месяца на его название
 *
 * @param { string } date отформатированная дата, формата 0000-00-00
 * @returns { string } отформатированная дата, с заменой цифры месяца на его название 0000-*****-00
 */
export const addMonthToDate = (date: string): string => {
  const [year, month, day] = date.split(/-/);
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  return `${day} ${months[+month - 1]} ${year}`;
};
