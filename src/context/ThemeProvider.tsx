import { useState, useEffect, createContext, FC } from "react";

import { changeCssVariables } from "@helpers/changeCssVariables";

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
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    changeCssVariables(isDark);
  }, [isDark]);

  const changeIsDark = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        changeIsDark,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
