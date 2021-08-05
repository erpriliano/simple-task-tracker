import React, { useState, useContext } from 'react'

import Header from '../components/Header'
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'
import { UserContext } from '../commons/UserContext'

const Home = () => {
    const { setAuth } = useContext(UserContext)
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

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id: id, ...task }

        console.log(newTask)
        setTasks([...tasks, newTask])
    }

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
            <Header title="Task Tracker" onClick={() => setAuth(false)} />
            <AddTask onSubmit={addTask} />
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

export default Home
