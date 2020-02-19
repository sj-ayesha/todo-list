import React, { Component } from "react";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      items: []
    };
  }

  onChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  addTodo(event) {
    event.preventDefault();
    this.setState({
      userInput: "",
      items: [...this.state.items, this.state.userInput]
    });
  }

  deleteTodo(event) {
    event.preventDefault();
    const array = this.state.items;
    const index = array.indexOf(event.target.value);

    array.splice(index, 1);
    this.setState({
      items: array
    });
  }

  renderTodos() {
    return this.state.items.map(item => {
      return (
        <div key={item}>
          {item} | <button onClick={this.deleteTodo.bind(this)}>x</button>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 align="center">Todo List</h1>
        <form className="form-row align-items-center">
          <input
            value={this.state.userInput}
            type="text"
            placeholder="Insert Item"
            onChange={this.onChange.bind(this)}
            className="form-control mb-2"
          />
          <button onClick={this.addTodo.bind(this)} className="btn btn-primary">Insert</button>
        </form>

        <div className="list-group">{this.renderTodos()}</div>
      </div>
    );
  }
}

export default TodoList;
