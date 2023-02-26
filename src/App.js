import "./styles.css";
import { useReducer } from "react";
import Reducer from "./Context/Reducer";
import { ToDoContext } from "./Context/ToDoContext";
import AddTodo from "./AddTodo";
import ToDoList from "./ToDoList";

const initailState = {
  todo: [],
  Inprogress: [],
  Completed: []
};
export default function App() {
  const [state, dispatch] = useReducer(Reducer, initailState);

  return (
    <div className="App">
      <ToDoContext.Provider value={{ state, dispatch }}>
        <AddTodo />
        <ToDoList />
      </ToDoContext.Provider>
    </div>
  );
}
