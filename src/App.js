import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'finish react project' }
    ]
  }

  deleteToDo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      //  since the key and the value both have the same name we can use the following syntax instead of "todos: todos"
      todos
    })
  }
  render() {
    return (
      <div className="todo-app  container">
        <h1 className="center blue-text">Todos</h1>
        {/* component todos with props "todos" and deleteToDo*/}
        {/* passing props in here gives us access to the props in the corresponding component */}
        <Todos todos={this.state.todos} deleteToDo = {this.deleteToDo}/>
      </div>
    );
  }
}

export default App;
