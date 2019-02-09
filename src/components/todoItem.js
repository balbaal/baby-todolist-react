import React from "react";
import FlipMove from "react-flip-move";

import { fetchTodos } from "../actions/todoAction";
import { connect } from "react-redux";

class TodoItem extends React.Component {

  componentWillMount(){
      this.props.fetchTodos()
  }

  render() {
    let lists =
      this.props.items.length === 0 ? (
        <h3 style={{ color: "#333" }}>no item list . . .</h3>
      ) : (
        this.props.items.map((item, index) => {
          return (
            <li onClick={() => this.props.onDeleteItem(index)} key={index}>
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
  items: state.todos.todos
});

export default connect(
  mapStateToProps,
  { fetchTodos }
)(TodoItem);
