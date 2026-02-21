import { Sun } from "./animate-ui/icons/sun";
import { Moon } from "./animate-ui/icons/moon";
import { useTheme } from "./providers/theme/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-7 left-1/2 -translate-x-1/2 w-8 h-8">
      <button
        onClick={toggleTheme}
        className="w-full h-full rounded-full bg-foreground flex items-center justify-center shadow-lg"
      >
        {theme === "dark" ? (
          <Sun animateOnHover className="w-5 h-5" color={"black"} />
        ) : (
          <Moon animateOnHover className="w-5 h-5" color={"white"} />
        )}
      </button>
    </div>
  );
}
