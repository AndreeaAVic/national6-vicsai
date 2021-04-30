import { AppLogo } from "../AppLogo/AppLogo";
import { Menu } from "./Menu/Menu";

import "./Header.css";

export function Header() {
  return (
    <div className="app-header">
      <Menu />
      <AppLogo />
      <p className="app-header__title">To Do App</p>
    </div>
  )
}