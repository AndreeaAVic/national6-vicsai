import { Component } from 'react';
import { ToDoItem } from "../ToDoItem/ToDoItem";

export class ToDoList extends Component {
    state = {
        toDoList: [],
        inputValue: "",
        shouldCreateUser: false,
        isInvalid: false,
    };

    removeItem = (itemText) => {
        const filteredToDoList = this.state.toDoList.filter(
            itemData => itemData.item !== itemText
        );
        
        this.setState({toDoList: filteredToDoList});

        const payload = {
            id: "avicsai",
            todo: filteredToDoList,
        };

        fetch('https://simple-json-server-scit.herokuapp.com/todo/avicsai', {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
        });
    };

    updateCheckStatus = (index, value) => {
        console.log(index, value);

        const newList = this.state.toDoList.map((item, itemIndex) => {
            if(itemIndex === index) {
                item.checked = value; 
            }

            return item;
        });

        this.setState({ toDoList: newList });

        const payload = {
            id: "avicsai",
            todo: newList,
        };

        fetch('https://simple-json-server-scit.herokuapp.com/todo/avicsai', {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
        });
    }

    componentDidMount() {
        console.log("ToDoList has finished mounting");

        fetch("https://simple-json-server-scit.herokuapp.com/todo/avicsai")
            .then(r => r.json())
            .then(json => {
                console.log(json);
                if(json.todo) {
                    this.setState({ toDoList: json.todo });
                } else {
                    this.setState({ shouldCreateUser: true });
                }
            });
    }

    componentWillUnmount() {
        console.log("ToDoList will be unmounted");
    }

    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value, isInvalid: false });
    };

    handleAddItem = () => {
        if(this.state.inputValue === "") {
            this.setState({ isInvalid: true });
        } else {
            this.setState({
                toDoList: [
                    { checked: false, item: this.state.inputValue }, 
                    ...this.state.toDoList,
                ],
                inputValue: "",
                isInvalid: false,
            });

            const payload = {
                id: "avicsai",
                todo: [
                    { checked: false, item: this.state.inputValue },
                    ...this.state.toDoList,
                ],
            };

            if(this.state.shouldCreateUser) {
                fetch('https://simple-json-server-scit.herokuapp.com/todo', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
                this.setState({ shouldCreateUser: false });
            } else {
                fetch('https://simple-json-server-scit.herokuapp.com/todo/avicsai', {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
            }
        }
    }

    render() {
        console.log("ToDoList - render");
        console.log(this.state);

        return <div className="to-do-list">
            {this.state.toDoList.map((itemData, index) => (
                    <ToDoItem 
                        key={index + itemData.item} 
                        checkValue={itemData.checked} 
                        label={itemData.item} 
                        removeItem={this.removeItem}
                        itemIndex={index}
                        updateCheckStatus={this.updateCheckStatus}
                    />
            ))}

            <div className="add-item">
                <input 
                    value={this.state.inputValue} 
                    onChange={this.handleInputChange}
                    style={{
                        border: this.state.isInvalid ? "4px solid red" : undefined,
                    }}
                />
                <button onClick={this.handleAddItem}>+</button>
            </div>
        </div>;
    }
}
