import { Header } from "./components/Header/Header";
// import { ToDoItem } from "./components/ToDoItem/ToDoItem";
// import { ToDoItemWithState } from "./components/ToDoItemWithState/ToDoItemWithState";
import { ToDoList } from "./components/ToDoList/ToDoList";
import { Component } from "react";

import './App.css';

class App extends Component {
  state = {
    showToDoList: true,
  };

  toggleToDoListVisibility = () => {
    this.setState({ showToDoList: !this.state.showToDoList });
  };

  render() {
    return (
      <div className="App" id="app">
        <Header />
        <button onClick={this.toggleToDoListVisibility}>
          Hide/Show ToDoList
        </button>
        {this.state.showToDoList ? <ToDoList /> : null}
      </div>
    );
  }
}

export default App;
