import React from 'react'
import PropTypes from 'prop-types'

import TaskFilter from '../Task-filter'
import './footer.css'
export default class Footer extends React.Component {
  render() {
    const { completeCount, clearCompleted, setCurrButton } = this.props
    return (
      <footer className="footer">
        <span className="todo-count">{completeCount} items left</span>
        <TaskFilter setCurrButton={(button) => setCurrButton(button)} />
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    )
  }
  static defaultProps = {
    completeCount: 0,
    clearCompleted: () => {},
  }
  static propTypes = {
    completeCount: PropTypes.number,
    clearCompleted: PropTypes.func,
  }
}
