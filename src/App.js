import React, { Component } from 'react';
import Todos from './Todos';
import AddToDo from './AddToDo'

const ids= [1, 2];

class App extends Component {
  state = {
    todos: [
      { id: ids[0], content: 'buy some milk' },
      { id: ids[1], content: 'finish react project' }
    ]
  }
  //  Function deletes a todo item
  deleteToDo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      //  since the key and the value both have the same name we can use the following syntax instead of "todos: todos"
      todos
    })
  }
  //  Function adds a todo item
  addToDo = (todo) => {
    //  pushing a new id to the ids array
    ids.push(ids.length +1);
    //  setting the new created id as the new todo item's id
    todo.id = ids.length;
    //  Using the spread operator to spread the items of the current todolist into a new array of todos
    //  and adding the new todo item to the end of that array
    let newTodos = [...this.state.todos, todo];
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className="todo-app  container">
        <h1 className="center blue-text">Todos</h1>
        {/*Adding a new todo item*/}
        <AddToDo addToDo={this.addToDo}/>
        {/* component todos with props "todos" and deleteToDo*/}
        {/* passing props in here gives us access to the props in the corresponding component */}
        <Todos todos={this.state.todos} deleteToDo = {this.deleteToDo}/>
        
      </div>
    );
  }
}

export default App;
