const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

  return `${year}-${month}-${day}`;
};

export const dateNow = () => {
  const date = new Date();
  const res = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());

  return formatDate(res);
};

export const dateNext = (date: string, countDays: string | number) => {
  const [year, month, day] = date.split(/-/).map((elem) => Number(elem));
  const res = new Date(year, month, day + +countDays);

  return formatDate(res);
};
export const formatDateByMain = (date: string) => {
  const [year,month,day] = date.split(/-/);
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
  return `${day} ${months[+month - 1]} ${year}`
};
