import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, createContext } from "react";

import Homepage from "./pages/Homepage";
import NotFound from "./pages/404";

import Vanta from "./components/Vanta.jsx";

export const AppContext = createContext();

function App() {
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme || "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const switchTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <AppContext.Provider value={{ theme, switchTheme }}>
      <Vanta />
      <BrowserRouter basename="/Portfolio">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
