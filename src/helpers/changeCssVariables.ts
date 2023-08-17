/**
 * Функция берет :root и заменяет значение его css свойств --bg-color-default и --theme-color-default на светлую или темную
 *
 * @param { boolean } isDark - утверждение, темная тема или нет
 */
export const changeCssVariables = (isDark: boolean) => {
  const root: any = document.querySelector(":root");
  const cssVariables = ["text", "theme", "bg"];

  cssVariables.forEach((element) => {
    root.style.setProperty(
      `--${element}-color-default`,
      `var(--${element}-color-${isDark ? "dark" : "white"})`
    );
  });
};
