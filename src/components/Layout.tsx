import { Outlet } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export default function Layout() {
  return (
    <div className="relative h-full">
      <ThemeToggle />
      <Outlet />
    </div>
  );
}
