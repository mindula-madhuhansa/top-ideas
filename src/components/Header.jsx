import { useContext } from "react";
import { PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { ThemeContext } from "../context/ThemeContext";
import { THEMES } from "../constants";

export default function Header() {
  const navigation = useNavigate();
  const { setTheme } = useContext(ThemeContext);

  return (
    <header className="border flex flex-1 items-center justify-between shadow-lg p-4 md:p-8 rounded-lg">
      <h2 className="font-bold text-2xl md:text-4xl">Top Ideas</h2>
      <div className="flex flex-col md:flex-row items-center space-y-2 space-x-0 md:space-x-2 md:space-y-0">
        <button
          onClick={() => navigation("/new")}
          className="btn btn-primary btn-sm md:btn-lg"
        >
          <PlusCircle className="h-5 w-5" />
          New Idea
        </button>

        <select
          onChange={(e) => setTheme(e.target.value)}
          className="select select-sm md:select-lg  border-primary w-full max-w-xs"
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
