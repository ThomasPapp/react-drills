import React from 'react'
import Todo from './Todo'

const List = props => {
    const tasks = props.tasks.map((task, i) => <Todo key={i} task={<p>{task}</p>} />)
    return (
        <div>
            {tasks}
        </div>
    )
}

export default List