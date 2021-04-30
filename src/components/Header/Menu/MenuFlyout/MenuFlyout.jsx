import "./MenuFlyout.css";

export function MenuFlyout(props) {
    const {display, style} = props;
    return (
        <div className="app-menu-flyout" style={display ? style : {}}>
            <p>about</p>
            <p>tasks</p>
        </div>
    );
}