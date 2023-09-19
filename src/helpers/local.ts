/**
 * Функция, возвращающая значение из LocalStorage по ключу
 *
 * @param { string } key любая строка
 * @returns значение из localStorage по ключу
 */
export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  try {
    if (data !== null) {
      return JSON.parse(data);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
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
