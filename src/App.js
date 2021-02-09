// - Your todo list should display a list of todos, an input field, a submit button, and a clear all button.
// - Be sure to use the given files for building out these components.
// - `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
//   - All of your application data will be stored here on `<App />`.
//   - All of your `handler` functions should live here on `<App />`.
// - `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.
// - `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.
// - `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
//   - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
//   - Once a todo is submitted, the Todo List should re-render and show the added todo.

import React from 'react';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'


const needTodo = [
  {
    name: 'This thing',
    id: 1,
    completed: false
  },
  {
    name: 'That thing',
    id: 2,
    completed: false
  },
  {
    name: 'That other thing',
    id: 3,
    completed: false
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state= {
      needTodo: needTodo,

    }
  }

  toggleItem = (clickedItemId) =>{
    const newTodo = this.state.needTodo.map((item)=>{
        if(item.id === clickedItemId){
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      })
      this.setState({
        needTodo: newTodo,
      })
  } // end toggleItem

  addItem = (name ,item) => {
    console.log(item)
    this.setState({
      needTodo: [...this.state.needTodo, {name: item , id: Math.floor(Math.random()*100), completed: false }]
    })
  }

  // handleClear = () => {
  //   const newTaskList = this.state.task.filter((t)=>{
  //     return !t.completed;
  //   });
  //   this.setState({
  //     task:newTaskList,
  //   });
  // }



  render() {
    console.log('App State needTodo', this.state.needTodo)
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoList needTodo={this.state.needTodo} toggleItem={this.toggleItem}/>
        <TodoForm addItem={this.addItem} />
        
      </div>
    );
  }
}

export default App;
