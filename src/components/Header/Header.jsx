import { AppLogo } from "../AppLogo/AppLogo";
import "./Header.css";

export function Header() {
  return (
    <div className="app-header">
      <AppLogo />
      <p className="app-header__title">To Do App</p>
    </div>
  );
}