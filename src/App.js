import { Header } from "./components/Header/Header";
// import { ToDoItem } from "./components/ToDoItem/ToDoItem";
// import { ToDoItemWithState } from "./components/ToDoItemWithState/ToDoItemWithState";

import './App.css';
import { ToDoList } from "./components/ToDoList/ToDoList";

function App() {
  return (
  <div className="App" id="app">
    <Header />
    <ToDoList />
  </div>
  );
}

export default App;
