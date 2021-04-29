import './SendButton.css';

export function SendButton(props) {
    return (
        <div className='send-button'>
            <button onClick={props.onClick}>Send</button>
        </div>
    );
}