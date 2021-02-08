import React from 'react'

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            newTodoName: '',
        }
    }

    handleChanges = (event) =>{
        this.setState({
            newTodoName: event.target.value,
        })
    }
    handleSubmit = (evt) =>{
            //how do we set the state of state held on a different file?
            evt.preventDefault();
            this.props.addItem(this.state.newTodoName);
            
    }


    render(){
        return(
            <form onSubmit ={this.handleSubmit}> 
                <input type='text' placeholder="type your next item here" value={this.state.newTodoName} onChange={this.handleChanges}/>
                <button>Add your todo list Item</button>
            </form>
        )
    }
}
export default TodoForm;