import React from 'react'
import PropTypes from 'prop-types'

import TaskFilter from '../TaskFilter'
import './footer.css'
export default class Footer extends React.Component {
  render() {
    const { completeCount, clearCompleted, setFilter, filterSetButton } = this.props
    return (
      <footer className="footer">
        <span className="todo-count">{completeCount} items left</span>
        <TaskFilter setFilter={setFilter} filterSetButton={filterSetButton} />
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
