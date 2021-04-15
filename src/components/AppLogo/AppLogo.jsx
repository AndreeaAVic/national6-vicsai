import toDoSvg from "./to-do-list.svg";
import "./AppLogo.css";

export function AppLogo() {
    return <img src={toDoSvg} alt="app-logo" className="app-logo" />;
}