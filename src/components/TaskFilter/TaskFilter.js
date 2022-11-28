import PropTypes from 'prop-types'
import './TaskFilter.css'
const TaskFilter = (props) => {
  const filterData = [{ name: 'All' }, { name: 'Active' }, { name: 'Completed' }]
  const { setFilterButton, filterSetButton } = props
  const filters = filterData.map((item) => {
    const { name } = item

    const buttonClass = name === filterSetButton ? 'selected' : ''

    return (
      <li key={name}>
        <button type="button" className={buttonClass} onClick={() => setFilterButton(name)}>
          {name}
        </button>
      </li>
    )
  })
  return <ul className="filters">{filters}</ul>
}

TaskFilter.defaultProps = {
  setFilter: () => {},
}
TaskFilter.propTypes = {
  setFilter: PropTypes.func,
}
export default TaskFilter
