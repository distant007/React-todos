import React from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import './task.css'

class Task extends React.Component {
  date = new Date()
  state = {
    time: formatDistanceToNow(this.date, {
      includeSeconds: true,
    }),
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  tick() {
    this.setState({
      time: formatDistanceToNow(this.date, {
        includeSeconds: true,
      }),
    })
  }
  render() {
    const { discription, onDelete, completeItem, editTask, complete } = this.props
    let checked = false
    if (complete) {
      checked = true
    }
    return (
      <div className="view">
        <input className="toggle" type="checkbox" onChange={completeItem} checked={checked} />
        <label onClick={completeItem}>
          <span className="description">{discription}</span>
          <span className="created">created {this.state.time}</span>
        </label>
        <button className="icon icon-edit" onClick={editTask}></button>
        <button className="icon icon-destroy" onClick={onDelete}></button>
      </div>
    )
  }
  static defaultProps = {
    completeItem: () => {},
  }
  static propTypes = {
    completeItem: PropTypes.func,
  }
}
export default Task
