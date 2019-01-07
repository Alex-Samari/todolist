import React from 'react';

//  creating a functional Todo component
const Todos = ({todos}) => {
    
    const toDoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
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