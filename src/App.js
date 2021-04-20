import { Header } from "./components/Header/Header";
import { ToDoItem } from "./components/ToDoItem/ToDoItem";
import { ToDoItemWithState } from "./components/ToDoItemWithState/ToDoItemWithState";

import './App.css';

function App() {
  return (
  <div className="App" id="app">
    <Header />
    <ToDoItem label="task 1" checkValue={false} />
    <ToDoItem label="task 2" checkValue={true} />
    <ToDoItem label="task 3" checkValue={true} />
    <ToDoItemWithState label="task 4" checkValue={true} />
  </div>
  );
}

export default App;
