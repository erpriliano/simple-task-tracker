import React, { useState } from 'react'

function AddTask({ onSubmit }) {
    const [input, setInput] = useState({
        text: '',
        day: '',
        reminder: false,
    })

    return (
        <form
            className="add-form"
            onSubmit={(e) => {
                e.preventDefault()

                if (!input.text) {
                    alert('Task can not be empty')
                    return
                }

                onSubmit({ ...input })
                setInput({ text: '', day: '', reminder: false })
            }}
        >
            <div className="form-control">
                <label>Task</label>
                <input
                    type="text"
                    value={input.text}
                    onChange={(e) =>
                        setInput({ ...input, text: e.target.value })
                    }
                    placeholder="Add task..."
                />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input
                    type="text"
                    value={input.day}
                    onChange={(e) =>
                        setInput({ ...input, day: e.target.value })
                    }
                    placeholder="Add day & time..."
                />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    value={input.reminder}
                    onChange={(e) =>
                        setInput({
                            ...input,
                            reminder: e.currentTarget.checked,
                        })
                    }
                />
            </div>

            <input className="btn btn-block" type="submit" value="Save" />
        </form>
    )
}

export default AddTask
