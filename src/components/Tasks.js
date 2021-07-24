import React from 'react'

import Task from './Task'

function Tasks({ tasks, onDelete, onToggle }) {
    return (
        <>
            {tasks.map((task, i) => {
                return (
                    <Task
                        key={i}
                        task={task}
                        onDelete={() => onDelete(task.id)}
                        onToggle={() => onToggle(task.id)}
                    />
                )
            })}
        </>
    )
}

export default Tasks
