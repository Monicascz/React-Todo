import React from 'react'

export default function Todo(props) {
    console.log('onClick', props.todoItem.completed)
    return (
        <div onClick={() => props.toggleItem(props.todoItem.id)} 
        className= {`${props.todoItem.completed ? 'completed' : ''}`}
            >
            <p  >{props.todoItem.name}</p>
        </div>
    )
}
