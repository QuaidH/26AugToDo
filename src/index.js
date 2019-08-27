import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Todoitem from "./Todoitem";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: "",
      todos: []
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.todo],
      todo: ""
    });
  };

  renderTodos = () => {
    return this.state.todos.map(todo => {
      return <Todoitem title={todo} />;
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <form onSubmit={this.handleSubmit} className="add-todo-form">
          <input
            type="text"
            placeholder="Add ToDo"
            name="todo"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <button type="submit">add</button>
        </form>
        {this.renderTodos()}
        <Todoitem title="some stuff" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
