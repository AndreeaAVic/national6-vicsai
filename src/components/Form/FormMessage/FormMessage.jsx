import './FormMessage.css';

export function FormMessage(props) {
    const {label, onChange, isValid, style} = props;

    return (
        <div className='form-message'>
            <p>{label}</p>
            <textarea onChange={onChange} style={!isValid ? style : {}}></textarea>
        </div>
    );
}