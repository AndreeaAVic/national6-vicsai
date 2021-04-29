import { Component } from "react";
import { ToDoList } from "../../components/ToDoList/ToDoList";

export class Home extends Component {
    state = {
        showToDoList: true,
    };
    
    toggleToDoListVisibility = () => {
        this.setState({ showToDoList: !this.state.showToDoList });
    };

    componentDidMount() {
        console.log("home got mounted");
    };

    componentWillUnmount() {
        console.log("home got unmounted");
    };

    render() {
        return (
            <div className='home'>
                <button onClick={this.toggleToDoListVisibility}>
                    Hide/Show ToDoList
                </button>

                {this.state.showToDoList ? <ToDoList /> : null}
            </div>
        )
    }
}