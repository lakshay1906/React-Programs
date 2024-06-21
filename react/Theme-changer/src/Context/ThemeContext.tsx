import { createContext, useContext, useState } from "react";
import { Theme } from "../Theme/Theme";

type ThemeContextProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<boolean | {} | null>(Theme);

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
