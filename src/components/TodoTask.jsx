import React,{useEffect} from 'react'

export default function TodoTask(props) {

    function updateTaskStatus() {
        props.onClick(props.task.id);
    }

    const taskClass = props.task.status === 0 ? "taskBox_done" : "taskBox_unDone";


    return (
        <div className={taskClass}>
            <label onClick={() => updateTaskStatus(props)}>{props.task.name}</label>
        </div>
    )
}
