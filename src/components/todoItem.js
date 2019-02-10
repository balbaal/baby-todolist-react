import React from "react";
import FlipMove from "react-flip-move";

import { fetchTodos, deleteTodo } from "../actions/todoAction";
import { connect } from "react-redux";

import { notify } from "../notify";

class TodoItem extends React.Component {
  componentWillMount() {
    this.props.fetchTodos();
  }

  onDeleteItem = index => {
    notify(0, "deleted item !");
    this.props.deleteTodo(this.props.todos, index);
  };

  render() {
    let lists =
      this.props.todos.length === 0 ? (
        <h3 style={{ color: "#333" }}>no item list . . .</h3>
      ) : (
        this.props.todos.map((item, index) => {
          return (
            <li onClick={() => this.onDeleteItem(index)} key={index}>
              {item}
            </li>
          );
        })
      );

    return (
      <div>
        <ul>
          <FlipMove duration={250} easing="ease-out">
            {lists}
          </FlipMove>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(TodoItem);
