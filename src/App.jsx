import { useState } from "react";

import Home from "./app/Home";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("winter");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        data-theme={theme}
        className="flex flex-col items-center h-screen w-full p-4 md:p-8"
      >
        <div className="max-w-7xl w-full">
          <Home />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
