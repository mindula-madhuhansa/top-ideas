import { useState } from "react";

import Home from "./app/Home";
import AddNewIdea from "./app/AddNewIdea";
import { ThemeContext } from "./context/ThemeContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new",
    element: <AddNewIdea />,
  },
]);

function App() {
  const [theme, setTheme] = useState("winter");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        data-theme={theme}
        className="flex flex-col items-center h-screen w-full p-4 md:p-8"
      >
        <div className="max-w-7xl w-full">
          <RouterProvider router={router} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
