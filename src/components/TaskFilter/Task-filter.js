import React from 'react'
import PropTypes from 'prop-types'
import './task-filter.css'
export default class TaskFilter extends React.Component {
  state = {
    filterData: [{ name: 'All' }, { name: 'Active' }, { name: 'Completed' }],
  }
  render() {
    const { setFilter, filterSetButton } = this.props
    const { filterData } = this.state
    const filters = filterData.map((item) => {
      const { name } = item

      const buttonClass = name === filterSetButton ? 'selected' : ''

      return (
        <li key={name}>
          <button type="button" className={buttonClass} onClick={() => setFilter(name)}>
            {name}
          </button>
        </li>
      )
    })
    return <ul className="filters">{filters}</ul>
  }
  static defaultProps = {
    setFilter: () => {},
  }
  static propTypes = {
    setFilter: PropTypes.func,
  }
}
