import React, {Component} from 'react';

class AddToDo extends Component {
    state = {
        content: ''
    }

    handleChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit = (event) => {
        //  preventing the default form submit action (reset page)
        event.preventDefault();
        //  calling the addToDo function from App.js and passing the current state of the AddToDo to that function
        this.props.addToDo(this.state);
        //  Removing the contents of the form after each submission in order to add a new item
        this.setState({
            content: ''
        })
    }
    render(){
        return(
            <div>
                <legend>Add new todo: </legend>
                <form onSubmit={this.handleSubmit}>
                    {/* Setting the value to the current state (empty content) allows us to clear the form after submission.
                    Also see "handleSubmit" function*/}
                    <input type="text" placeholder="Add a new todo item here" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddToDo;