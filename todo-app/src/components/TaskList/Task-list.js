import React from 'react'
import PropTypes from 'prop-types'

import Task from '../Task'
import './task-list.css'
export default class TaskList extends React.Component {
  render() {
    const { todos, onDeleted, completeItem, setNewDiscription, time } = this.props
    const elements = todos.map((item) => {
      const { id, discription, complete, editing } = item
      return (
        <li key={id} id={id} className={complete ? 'completed' : 'editing'}>
          <Task
            time={time}
            discription={discription}
            complete={complete}
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
  static defaultProps = {
    onDeleted: () => {},
    completeItem: () => {},
  }
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleted: PropTypes.func,
    completeItem: PropTypes.func,
  }
}
