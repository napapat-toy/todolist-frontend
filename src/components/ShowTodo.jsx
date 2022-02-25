import React from 'react'
import './showTodo.css'

function ShowTodo({ header, text, handleEdit, handleDelete }) {
    return (
        <div className='todo-container'>

            <h1>{header}</h1>
            {text ? <p>{text}</p> : ''}

            <button className='edit-btn' onClick={handleEdit}>
                <img src="https://img.icons8.com/material-sharp/24/000000/edit--v1.png" alt='pencil' />
            </button>
            <button className='delete-btn' onClick={handleDelete}>
                <img src="https://img.icons8.com/ios-filled/50/000000/x.png" alt='x' />
            </button>
        </div>
    )
}

export default ShowTodo