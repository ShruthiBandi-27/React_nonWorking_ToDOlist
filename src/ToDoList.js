import { ToDoContext } from "./Context/ToDoContext";
import { useContext } from "react";
import { Alert, Button, Container } from "reactstrap";
import {
  MOVE_TO_COMPLETED,
  MOVE_TO_INPROGRESS,
  REMOVE_TODO
} from "./Context/Action.types";

export default function ToDoList() {
  const { state } = useContext(ToDoContext);
  const { dispatch } = useContext(ToDoContext);
  console.log(state);
  const { todo, Inprogress, Completed } = state;
  //console.log("shruthi" + { todo });
  const handleDelete = (id) => {
    console.log("deleted");
    dispatch({
      type: REMOVE_TODO,
      payload: id
    });
  };
  return (
    <Container>
      {todo.map((value) => {
        return (
          // <Alert color="primary" toggle={() => handleDelete(value.id)}>
          //   {value.todo}
          // </Alert>
          <Alert color="primary">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {value.todo}
              <Button
                color="primary"
                outline
                onClick={() =>
                  dispatch({ type: MOVE_TO_INPROGRESS, payload: value.id })
                }
              >
                MOVE_TO_INPROGRESS
              </Button>
            </div>
          </Alert>
        );
      })}

      {Inprogress.map((value) => {
        return (
          // <Alert color="primary" toggle={() => handleDelete(value.id)}>
          //   {value.todo}
          // </Alert>
          <Alert color="warning">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {value.todo}
              <Button
                color="warning"
                outline
                onClick={() =>
                  dispatch({ type: MOVE_TO_COMPLETED, payload: value.id })
                }
              >
                Move to Completed
              </Button>
            </div>
          </Alert>
        );
      })}

      {Completed.map((value) => {
        return (
          // <Alert color="primary" toggle={() => handleDelete(value.id)}>
          //   {value.todo}
          // </Alert>
          <Alert color="success">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {value.todo}
              <Button
                color="primary"
                outline
                onClick={() =>
                  dispatch({ type: REMOVE_TODO, payload: value.id })
                }
              >
                DELETE
              </Button>
            </div>
          </Alert>
        );
      })}
    </Container>
  );
}
