import React from 'react'
import PropTypes from 'prop-types'

import Task from '../task'
import './task-list.css'
export default class TaskList extends React.Component {
  render() {
    const { todos, onDeleted, completeItem, editTask, setNewDiscription, onSubmit } = this.props
    const elements = todos.map((item) => {
      const { id, discription, complete, filterComplete, editing } = item
      let classNames = ''
      if (complete) {
        classNames = 'completed'
      }
      if (filterComplete) {
        classNames += ' hidden'
      }
      if (editing) {
        classNames = 'editing'
      }
      return (
        <li key={id} id={id} className={classNames}>
          <Task
            discription={discription}
            onDelete={() => onDeleted(id)}
            completeItem={() => completeItem(id)}
            editTask={() => editTask(id)}
          />
          <form className="form-edit" onSubmit={(e) => onSubmit(e, id)}>
            <input type="text" className="edit" value={discription} onChange={(e) => setNewDiscription(e, id)}></input>
          </form>
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
