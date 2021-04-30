import menuSvg from "./menu.svg";
import "./MenuButton.css";

export function MenuButton(props) {
    return (
        <div className="app-menu-button" onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            <img src={menuSvg} alt="menu-img" />
        </div>
    );
}