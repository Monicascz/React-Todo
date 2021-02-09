// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React from 'react'

import Todo from './Todo'

export default function TodoList(props) {
    const { needTodo, toggleItem } =props
    console.log("todoItem", props.needTodo)
    return (
        
        <div>
            <h1>Here is what you need to get done: </h1>
            {needTodo.map((todoItem)=>(
                <Todo key={todoItem.id} todoItem={todoItem} toggleItem={toggleItem}/>
                )  
            )}
        </div>
    )
}


// class TodoList extends React.Component{
//     constructor(){
//         super();
        
//     }

//     render(){
//         return(
//             <div>

//             </div>
//         )
//     }
// }