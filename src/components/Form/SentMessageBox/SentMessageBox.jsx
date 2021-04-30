import './SentMessageBox.css';

export function SentMessageBox(props) {
    const { noDisplay, style, onClick } = props;
    return (
        <div className="sent-message-box" style={!noDisplay ? style : {}}>
            <p>Message sent!</p>
            <button onClick={onClick}>x</button>
        </div>
    )
}