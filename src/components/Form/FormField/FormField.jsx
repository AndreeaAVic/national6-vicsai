import './FormField.css';

export function FormField(props) {
    return (
        <div className='form-field'>
            <p>{props.label}</p>
            <input type='text' />
        </div>
    );
}