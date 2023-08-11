const formattingDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

  return `${year}-${month}-${day}`;
};

export const getNowDate = () => {
  const date = new Date();
  const res = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());

  return formattingDate(res);
};

export const addMonthToDate = (date: string) => {
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
