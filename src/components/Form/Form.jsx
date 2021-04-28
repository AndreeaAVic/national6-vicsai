import { Component } from 'react';
import { FormField } from './FormField/FormField';
import { FormMessage } from './FormMessage/FormMessage';
import { SendButton } from './SendButton/SendButton';

import './Form.css';

export class Form extends Component {
    render() {
        return (
            <div className='form'>
                <FormField label='FIRST NAME' />
                <FormField label='LAST NAME' />
                <FormField label='EMAIL' />
                <FormMessage label='MESSAGE' />
                <SendButton />
            </div>
        );
    };
}