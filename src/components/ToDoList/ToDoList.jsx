import { Component } from 'react';
import { ToDoItem } from "../ToDoItem/ToDoItem";

const mockToDoListData = [
    {
        checked: false,
        item: 'task1'
    },
    {
        checked: true,
        item: 'task2'
    },
    {
        checked: false,
        item: 'task3'
    }
];

export class ToDoList extends Component {
    state = {
        toDoList: mockToDoListData,
        inputValue: "",
    };

    removeItem = (itemText) => {
        this.setState({toDoList: this.state.toDoList.filter(itemData => itemData.item !== itemText)})
    };

    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    };

    handleAddItem = () => {
        this.setState({
            toDoList: [
                { checked: false, item: this.state.inputValue }, 
                ...this.state.toDoList,
            ],
            inputValue: "",
        });
    }

    render() {
        return <div className="to-do-list">
            {this.state.toDoList.map((itemData) => (
                    <ToDoItem 
                        key={itemData.item} 
                        checkValue={itemData.checked} 
                        label={itemData.item} 
                        removeItem={this.removeItem}
                    />
            ))}

            <div className="add-item">
                <input 
                    value={this.state.inputValue} 
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleAddItem}>+</button>
            </div>
        </div>;
    }
}
