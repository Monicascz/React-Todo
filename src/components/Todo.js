import React from 'react'

export default function Todo(props) {
   console.log("Todo, .completed",props.todoItem.completed)
    return (
        <div onClick={() => props.toggleItem(props.todoItem.id)}
        className= {`item${props.todoItem.completed ? 'completed' : ''}`} 
        
            >
            <p>{props.todoItem.name}</p>
        </div>
    )
}
