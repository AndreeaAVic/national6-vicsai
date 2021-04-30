import { Component } from 'react';
import { FormField } from './FormField/FormField';
import { FormMessage } from './FormMessage/FormMessage';
import { SendButton } from './SendButton/SendButton';
import { SentMessageBox } from './SentMessageBox/SentMessageBox';

import './Form.css';

export class Form extends Component {
    state = {
        isValid: {
            firstNameInputValue: true,
            lastNameInputValue: true,
            emailInputValue: true,
            messageTextareaValue: true
        },
        firstNameInputValue: "",
        lastNameInputValue: "",
        emailInputValue: "",
        messageTextareaValue: "",
        noDisplay: true
    }

    handleInputChange = (event, key) => {
        const { isValid } = this.state;
        isValid[key] = true;
        this.setState({ [key]: event.target.value, isValid });
    }

    setInvalidInputKey = () => {
        const { isValid } = this.state;

        if(this.state.firstNameInputValue === "") {
            isValid.firstNameInputValue = false;
        }

        if(this.state.lastNameInputValue === "") {
            isValid.lastNameInputValue = false;
        }

        if(this.state.emailInputValue === "") {
            isValid.emailInputValue = false;
        }

        if(this.state.messageTextareaValue === "") {
            isValid.messageTextareaValue = false; 
        }

        if(
            isValid.firstNameInputValue === true &&
            isValid.lastNameInputValue === true &&
            isValid.emailInputValue === true &&
            isValid.messageTextareaValue === true
        ) {
            this.setState({ isValid, noDisplay: false });
        } else {
            this.setState({ isValid });
        }
    }

    closeMessageSentBox = () => {
        this.setState({ noDisplay: true });
    }

    render() {
        const { isValid } = this.state;
        const inputStyle = {
            border: "2px solid red"
        }
        const sentMessageBoxStyle = {
            display: "flex"
        }

        return (
            <div className='form'>
                <FormField 
                    label='FIRST NAME' 
                    value={this.state.firstNameInputValue} 
                    onChange={(event) => this.handleInputChange(event, 'firstNameInputValue')} 
                    style={inputStyle}
                    isValid={isValid.firstNameInputValue} 
                />
                <FormField 
                    label='LAST NAME' 
                    value={this.state.lastNameInputValue} 
                    onChange={(event) => this.handleInputChange(event, 'lastNameInputValue')}
                    style={inputStyle}
                    isValid={isValid.lastNameInputValue}
                />
                <FormField 
                    label='EMAIL' 
                    value={this.state.emailInputValue} 
                    onChange={(event) => this.handleInputChange(event, 'emailInputValue')}
                    style={inputStyle}
                    isValid={isValid.emailInputValue}
                />
                <FormMessage 
                    label='MESSAGE' 
                    value={this.state.messageTextareaValue} 
                    onChange={(event) => this.handleInputChange(event, 'messageTextareaValue')}
                    style={inputStyle}
                    isValid={isValid.messageTextareaValue}
                />
                <SendButton onClick={this.setInvalidInputKey} />
                <SentMessageBox noDisplay={this.state.noDisplay} style={sentMessageBoxStyle} onClick={this.closeMessageSentBox} />
            </div>
        );
    };
}