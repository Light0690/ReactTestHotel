import { useState, useEffect, createContext, FC } from "react";

import { changeCssVariables } from "@helpers/changeCssVariables";
import { getLocalStorage, setLocalStorage } from "@helpers/local";

interface IThemeContext {
  isDark: boolean;
  changeIsDark?: () => void;
}

interface Props {
  children: JSX.Element;
}

const defaultState = {
  isDark: false,
};

export const ThemeContext = createContext<IThemeContext>(defaultState);

const ThemeProvider: FC<Props> = ({ children, ...props }) => {
  const local: string = getLocalStorage("isDark");
  const [isDark, setIsDark] = useState<boolean>(local ? Boolean(local) : false);

  useEffect(() => {
    changeCssVariables(isDark);
  }, [isDark]);

  const changeIsDark = () => {
    setIsDark((prev) => !prev);
    setLocalStorage("isDark", `${!isDark}`);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        changeIsDark,
      }}
      {...props}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
