import {
  ADD_TODO,
  REMOVE_TODO,
  MOVE_TO_COMPLETED,
  MOVE_TO_INPROGRESS
} from "./Action.types";
export default function Reducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      let todo = [...state.todo, action.payload];
      //let todo = action.payload;
      //console.log({ ...state, todo });
      return { ...state, todo };
    case REMOVE_TODO:
      let removetodo = state.Completed.filter(
        (value) => value.id !== action.payload
      );
      return { ...state, Completed: removetodo };

    // case MOVE_TO_INPROGRESS:
    // alert("hello");
    // let filterMovetoInprogess = state.todo.filter(
    //   (value) => value.id === action.paylaod
    // );
    // let deleteTodo = state.todo.filter(
    //   (value) => value.id !== action.paylaod
    // );
    // return {
    //   ...state,
    //   todo: deleteTodo,
    //   Inprogress: [...state.Inprogress, ...filterMovetoInprogess]
    // };
    case MOVE_TO_INPROGRESS:
      // alert("hello");
      let filterMovetoInprogress = state.todo.filter(
        (value) => value.id === action.payload
      );
      let deleteTodo = state.todo.filter(
        (value) => value.id !== action.payload
      );
      return {
        ...state,
        todo: deleteTodo,
        Inprogress: [...state.Inprogress, ...filterMovetoInprogress]
      };

    // case MOVE_TO_COMPLETED:
    //   let filterMovetocompleted = state.Inprogress.filter(
    //     (value) => value.id === action.paylaod
    //   );
    //   let deleteTodoInprogress = state.Inprogress.filter(
    //     (value) => value.id !== action.paylaod
    //   );
    //   return {
    //     ...state,
    //     Inprogress: deleteTodoInprogress,
    //     Completed: [...state.Completed, ...filterMovetocompleted]
    //   };
    case MOVE_TO_COMPLETED:
      let filterMovetocompleted = state.Inprogress.filter(
        (value) => value.id === action.payload
      );
      let deleteTodoInprogress = state.Inprogress.filter(
        (value) => value.id !== action.payload
      );
      return {
        ...state,
        Inprogress: deleteTodoInprogress,
        Completed: [...state.Completed, ...filterMovetocompleted]
      };
    default:
      return { state };
  }
}
