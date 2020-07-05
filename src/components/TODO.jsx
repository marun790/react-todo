import React from 'react'
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

function TODO() {
    return (
        <div className='container'>
            <TodoHeader></TodoHeader>
            <TodoList></TodoList>
        </div>
    )
}

export default TODO
