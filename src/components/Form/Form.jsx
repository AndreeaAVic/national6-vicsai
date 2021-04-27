import { Component } from 'react';
import { FormField } from './FormField/FormField';

import './Form.css';

export class Form extends Component {
    render() {
        return (
            <div className='form'>
                <FormField label='FIRST NAME' />
                <FormField label='LAST NAME' />
                <FormField label='EMAIL' />
                <FormField label='MESSAGE' />
                <button>Send</button>
            </div>
        );
    };
}