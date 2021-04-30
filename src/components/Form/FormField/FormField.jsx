import './FormField.css';

export function FormField(props) {
    const { label, onChange, isValid, style } = props; 

    return (
        <div className='form-field'>
            <p>{label}</p>
            <input type='text' onChange={onChange} style={!isValid ? style : {}}/>
        </div>
    );
}