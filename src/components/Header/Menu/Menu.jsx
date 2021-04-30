import { Component } from "react";
import { MenuButton } from "./MenuButton/MenuButton";
import { MenuFlyout } from "./MenuFlyout/MenuFlyout";

import "./Menu.css";

export class Menu extends Component {
    state = {
        display: false
    }

    showMenuFlyout = () => {
        this.setState({ display: true })
    }
    
    hideMenuFlyout = () => {
        this.setState({ display: false })
    }

    render() {
        const menuFlyoutStyle = {
            display: "block"
        }

        return (
            <div className="app-menu">
                <MenuButton onMouseEnter={this.showMenuFlyout} onMouseLeave={this.hideMenuFlyout} />
                <MenuFlyout display={this.state.display} style={menuFlyoutStyle} />
            </div>
        )
    }
}