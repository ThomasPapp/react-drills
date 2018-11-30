import React from 'react'

const Todo = props => {

    const tasks = props.tasks.map((task, i) => <p key={i}>{task}</p>)

    return (
        <div>
            <h1>My to-do list:</h1>

            <input 
                placeholder="Enter new task"
                value={props.input}
                onChange={props.updateInput}
            />

            <button onClick={props.addTask}>Add</button>

            {tasks}
        </div>
    )
}

export default Todo