import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";
import { THEMES } from "../constants";

export default function Header() {
  const { setTheme } = useContext(ThemeContext);
  return (
    <header className="border flex flex-1 items-center justify-between shadow-lg p-4 md:p-8 rounded-lg">
      <h2 className="font-bold text-2xl md:text-4xl">Top Ideas</h2>
      <div className="flex items-center space-x-2">
        <button className="btn btn-primary btn-xs md:btn-lg">New Idea</button>

        <select
          onChange={(e) => setTheme(e.target.value)}
          className="select select-xs md:select-lg  border-primary w-full max-w-xs"
        >
          <option disabled selected>
            Theme
          </option>
          {THEMES.map((theme) => (
            <option key={theme.id} value={theme.value}>
              {theme.label}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}
