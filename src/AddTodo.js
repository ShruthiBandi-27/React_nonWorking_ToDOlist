import { InputGroup, Input, Button } from "reactstrap";
import { ToDoContext } from "./Context/ToDoContext";
import { useContext, useRef } from "react";
import { v4 } from "uuid";
import { ADD_TODO } from "./Context/Action.types";

export default function AddTodo() {
  const inputRef = useRef(null);
  const { dispatch } = useContext(ToDoContext);
  const handleSubmit = () => {
    //console.log(inputRef.current.value);
    dispatch({
      type: ADD_TODO,
      payload: {
        id: v4(),
        todo: inputRef.current.value
      }
    });
    inputRef.current.value = "";
  };
  return (
    <InputGroup
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <input ref={inputRef} />
      <Button onClick={handleSubmit}>To the Right!</Button>
    </InputGroup>
  );
}
