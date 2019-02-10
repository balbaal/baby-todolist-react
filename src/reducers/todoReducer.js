import { FETCH_TODOS, ADD_TODO, DELETE_TODO } from "../actions/types";

const initialState = {
  todos: [],
  todo: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload
      };

    case ADD_TODO:
      return {
        ...state,
        todos: action.payload
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: action.payload
      };

    default:
      return state;
  }
}
