import React from 'react';

//  creating a functional Todo component
const Todos = ({todos, deleteToDo}) => {
    //  check to see if there are any todos available
    const toDoList = todos.length ? (
        //  cycling through the todos array and copying the values into a new array
        todos.map((todo) => {
            return (
                //  colletion-item class is a materialize.css class
                <div className="collection-item" key={todo.id}>
                    {/* Wrapping the deleteToDo function in an anonymous function is necessary otherwise
                    the deleteToDo fires up everytime a toDoList is created */}
                    <span onClick={() => {deleteToDo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todos left</p>
    )
    return (
        //  collection is a class from the materilize css that is imported in "index.html: file"
        <div className="todos collection">
        {toDoList}
        </div>
    )
}

//  exporting the Todo component for the App.js use
export default Todos;