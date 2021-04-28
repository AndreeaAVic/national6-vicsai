import './FormMessage.css';

export function FormMessage(props) {
    return (
        <div className='form-message'>
            <p>{props.label}</p>
            <textarea></textarea>
        </div>
    );
}