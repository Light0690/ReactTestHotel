/**
 * Функция, возвращающая значение из LocalStorage по ключу
 *
 * @param { string } key любая строка
 * @returns значение из localStorage по ключу
 */
export const getLocalStorage = (key: string) => {
  if (typeof window === "undefined") {
    return null;
  }

  const data = localStorage?.getItem(key);

  if (data !== null) {
    return JSON.parse(data);
  }

  return false;
};

/**
 * Фунцкия, записывающая ключ - значение в LocalStorage
 *
 * @param key любая строка
 * @param data любое значение
 */

export const setLocalStorage = (key: string, data: string) => {
  localStorage.setItem(key, data);
};
