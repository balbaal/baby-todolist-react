import React, { Component } from "react";
import "./App.css";
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import 'react-toastify/dist/ReactToastify.min.css'

import TodoForm from "./components/todoForm";
import TodoItem from "./components/todoItem";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        "Wake up at 3am",
        "Reading Article on Medium",
        "Make Payment Component",
        "Implement MERN Stack"
      ]
    };
  }

  notify = (type, desc) => {
    if(type == 1){
      toast.success(desc, {
        position: toast.POSITION.RIGHT
      });
    }else if (type == 0){
      toast.error(desc, {
        position: toast.POSITION.RIGHT
      });
    }else if (type == 2){
      toast.warn(desc, {
        position: toast.POSITION.RIGHT
      });
    }
  };

  onDeleteItem = index => {
    this.notify(0, "deleted item !")
    let items = [...this.state.items];
    var res = items.filter((val, i) => {
      return i !== index;
    });

    this.setState({
      items: res
    });
  };

  onInputItem = item => {
    if (item.length === 0) {
      this.notify(2, "field can't empty")
    } else {
      this.notify(1, "added new item !")
      let items = [...this.state.items, item];
      this.setState({
        items: items
      });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="todo">
            <TodoForm onInputItem={this.onInputItem} />
            <TodoItem
              onDeleteItem={this.onDeleteItem}
              items={this.state.items}
            />
          </div>
          <ToastContainer autoClose={2500} />
        </header>
      </div>
    );
  }
}

export default App;
