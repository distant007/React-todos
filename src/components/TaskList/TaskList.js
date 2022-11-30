import React from 'react'
import PropTypes from 'prop-types'

import Task from '../Task'
import './task-list.css'
const TaskList = (props) => {
  const { todos, onDeleted, completeItem, setNewDiscription, onTimeChange } = props
  const elements = todos.map((item) => {
    const { id, discription, complete, editing, creationTime, min, sec } = item
    return (
      <li key={id} id={id} className={complete ? 'completed' : 'editing'}>
        <Task
          creationTime={creationTime}
          discription={discription}
          onTimeChange={onTimeChange}
          complete={complete}
          min={min}
          sec={sec}
          onDelete={() => onDeleted(id)}
          completeItem={() => completeItem(id)}
          setNewDiscription={setNewDiscription}
          id={id}
          editing={editing}
        />
      </li>
    )
  })
  return <ul className="todo-list">{elements}</ul>
}

TaskList.defaultProps = {
  onDeleted: () => {},
  completeItem: () => {},
}
TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleted: PropTypes.func,
  completeItem: PropTypes.func,
}

export default TaskList
