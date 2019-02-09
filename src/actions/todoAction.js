import { FETCH_TODOS, ADD_TODO, DELETE_TODO } from "../actions/types";

export const fetchTodos = () => dispatch => {
  dispatch({
    type: FETCH_TODOS,
    payload: [
      "Wake up at 3am",
      "Reading Article on Medium",
      "Make Payment Component",
      "Implement MERN Stack"
    ]
  });
};

export const addTodo = (oldData, newData) => dispatch => {
  let data = [...oldData, newData];

  dispatch({
    type: ADD_TODO,
    payload: data
  });
};
