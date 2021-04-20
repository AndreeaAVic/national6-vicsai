import { Component } from 'react';

export class ToDoItemWithState extends Component {
    state = {
        nrOfClicks: 0, 
    };

    handleIncreaseClicks = () => {
        console.log("click on item");
        this.setState({ nrOfClicks: 1 });
    }
    
    render() {
        return (
            <div className="to-do-item" onClick={this.handleIncreaseClicks}>
                <input type="checkbox" defaultChecked={this.props.checkValue} />
                <p>{this.props.label}</p>
                <img 
                    src="https://www.flaticon.com/svg/vstatic/svg/748/748023.svg?token=exp=1618938237~hmac=cdad5d00f44b62c6cce76081ce2fa5e9" 
                    alt="trash" 
                />
                <p>{this.state.nrOfClicks}</p>
            </div>
        );
    }
}