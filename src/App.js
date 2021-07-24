import React, { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Aug 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Aug 10th at 8:30am',
            reminder: true,
        },
        {
            id: 3,
            text: 'Indepence Day',
            day: 'Aug 17th at 0:00am',
            reminder: false,
        },
    ])

    //Delete task function
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle reminder
    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        )
    }

    return (
        <div className="container">
            <Header title="Task Tracker" />
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                />
            ) : (
                'No tasks to show'
            )}
        </div>
    )
}

export default App
