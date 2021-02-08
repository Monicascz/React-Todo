import React from 'react'

export default function Todo(props) {
   console.log(props.todoItem.id)
    return (
        <div className= {`item${props.todoItem.completed ? 'completed' : ''}`} 
        onClick={() => props.toggleItem(props.todoItem.id)}
            >
            <p>{props.todoItem.name}</p>
        </div>
    )
}
