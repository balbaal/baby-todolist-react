import React, { Component } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

import TodoForm from "./components/todoForm";
import TodoItem from "./components/todoItem";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="todo">
            <TodoForm />
            <TodoItem />
          </div>
          <ToastContainer autoClose={2500} />
        </header>
      </div>
    );
  }
}

export default App;
