import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }

  onchange = event => {
    this.setState({
      title: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.onInputItem(this.state.title);
            this.setState({
              title: ""
            });
          }}
        >
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

export default TodoForm;
