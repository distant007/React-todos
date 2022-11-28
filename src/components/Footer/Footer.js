import React from 'react'
import PropTypes from 'prop-types'

import TaskFilter from '../TaskFilter'
import './Footer.css'
const Footer = (props) => {
  const { completeCount, clearCompleted, setFilterButton, filterSetButton } = props
  return (
    <footer className="footer">
      <span className="todo-count">{completeCount} items left</span>
      <TaskFilter setFilterButton={setFilterButton} filterSetButton={filterSetButton} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}
Footer.propTypes = {
  completeCount: 0,
  clearCompleted: () => {},
}
Footer.propTypes = {
  completeCount: PropTypes.number,
  clearCompleted: PropTypes.func,
}
export default Footer
