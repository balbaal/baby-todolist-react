import React from "react";
import { notify } from "../notify";
import { addTodo } from "../actions/todoAction";
import { connect } from "react-redux";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }

  onInputItem = (event) => {
    event.preventDefault()
    let item = this.state.title;

    if (item.length === 0) {
      notify(2, "field can't empty");
    } else {
      notify(1, "added new item !");
      this.props.addTodo(this.props.todos, item);
    }

    this.setState({
      title: ""
    });
  };

  onchange = event => {
    this.setState({
      title: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onInputItem}>
          <input
            type="text"
            onChange={this.onchange}
            name="title"
            placeholder="enter item . . ."
            value={this.state.title}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoForm);
