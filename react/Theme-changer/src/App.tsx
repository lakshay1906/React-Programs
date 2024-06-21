import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { Theme } from "./Theme/Theme";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const [currentTheme, setCurrentTheme] = useState(Theme.darkMode);
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  console.log(typeof isDarkMode);
  useEffect(() => {
    if (isDarkMode) setCurrentTheme(Theme.darkMode);
    else setCurrentTheme(Theme.lightMode);
  }, [isDarkMode]);

  return (
    <div
      className={`w-full h-screen bg-${currentTheme.bg} text-${currentTheme.color}`}
    >
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
