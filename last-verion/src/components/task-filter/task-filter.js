import React from 'react'
import PropTypes from 'prop-types'
import './task-filter.css'
export default class TaskFilter extends React.Component {
  render() {
    const { filterActive, filterShowAll, filterShowCompleted } = this.props

    return (
      <ul className="filters">
        <li>
          <button onClick={filterShowAll}>All</button>
        </li>
        <li>
          <button onClick={filterActive}>Active</button>
        </li>
        <li>
          <button onClick={filterShowCompleted}>Completed</button>
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
