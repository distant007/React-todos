import React from 'react'
import PropTypes from 'prop-types'
import './task-filter.css'
export default class TaskFilter extends React.Component {
  render() {
    const { setCurrButton } = this.props
    return (
      <ul className="filters">
        <li>
          <button onClick={() => setCurrButton('all')}>All</button>
        </li>
        <li>
          <button onClick={() => setCurrButton('active')}>Active</button>
        </li>
        <li>
          <button onClick={() => setCurrButton('completed')}>Completed</button>
        </li>
      </ul>
    )
  }
  static defaultProps = {
    filterShowAll: () => {},
    filterActive: () => {},
    filterShowCompleted: () => {},
  }
  static propTypes = {
    filterShowAll: PropTypes.func,
    filterActive: PropTypes.func,
    filterShowCompleted: PropTypes.func,
  }
}
