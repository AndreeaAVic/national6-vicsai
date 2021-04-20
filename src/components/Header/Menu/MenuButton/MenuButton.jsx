import menuSvg from "./menu.svg";
import "./MenuButton.css";

export function MenuButton() {
    return (
        <div className="app-menu-button">
            <img src={menuSvg} id="menu-button" alt="menu-img" />
        </div>
    );
}