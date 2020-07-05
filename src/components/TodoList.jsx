import React, { useState } from 'react'
import TodoTask from './TodoTask';

const tasks_mock = [
    {
        id:1,
        name: 'Task 1',
        status: 1
    },
    {
        id:2,
        name: 'Task 2',
        status: 1
    },
    {
        id:3,
        name: 'Task 3',
        status: 1
    },
]


export default function TodoList() {

    const [tasks, updateTask] = useState(tasks_mock);

    function updateTaskStatus(id){
        const findedIndex = tasks_mock.findIndex(element => element.id === id);
        tasks_mock[findedIndex].status=0;
        updateTask([
            ...tasks_mock.slice(0, findedIndex),
            tasks_mock[findedIndex],
            ...tasks_mock.slice(findedIndex+1)
        ]);
        
    }

    return (
        <div>
            {tasks.map(item => (
                <TodoTask key={item.id} task={item} onClick={updateTaskStatus}></TodoTask>
            ))}
        </div>
    )
}
