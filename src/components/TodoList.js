// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React from 'react'

import Todo from './Todo'

export default function TodoList(props) {
    console.log("props", props);
    return (
        <div>
            <h1>Here is what you need to get done: </h1>
            {props.needTodo.map((todoItem)=>(
                <Todo key={todoItem.id} todoItem={todoItem} toggleItem={props.toggleItem}/>
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