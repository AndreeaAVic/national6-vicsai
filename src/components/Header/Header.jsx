import { AppLogo } from "../AppLogo/AppLogo";
import { Link } from "react-router-dom";

import "./Header.css";

export function Header() {
  return (
    <div className="app-header">
      <AppLogo />
      <p className="app-header__title">To Do App</p>
      <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}