import React from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import './task.css'

class Task extends React.Component {
  state = {
    time: formatDistanceToNow(this.props.creationTime, {
      includeSeconds: true,
    }),
    editText: this.props.discription,
    editing: false,
  }
  // tick() {
  //   this.setState({
  //     time: formatDistanceToNow(this.props.creationTime, {
  //       includeSeconds: true,
  //     }),
  //   })
  // }
  NewDiscription = (e) => {
    this.setState(() => {
      return {
        editText: e.target.value,
      }
    })
  }
  editingTask = () => {
    if (this.props.complete) {
      this.props.completeItem()
    }
    this.setState(() => {
      return {
        editing: true,
      }
    })
  }
  submitEdit(e) {
    e.preventDefault()
    this.setState(() => {
      return {
        editing: false,
      }
    })
  }
  render() {
    const { onDelete, completeItem, complete, setNewDiscription, id } = this.props
    const { editing, editText, time } = this.state
    if (editing) {
      return (
        <form
          className="form-edit"
          onSubmit={(e) => {
            setNewDiscription(editText, id)
            this.submitEdit(e)
          }}
        >
          <input
            type="text"
            className="edit"
            value={editText}
            onChange={(e) => this.NewDiscription(e)}
            autoFocus
          ></input>
        </form>
      )
    } else {
      return (
        <div className="view">
          <input className="toggle" type="checkbox" onChange={completeItem} checked={complete} />
          <label onClick={completeItem}>
            <span className="description">{editText}</span>
            <span className="created">created {time}</span>
          </label>
          <button className="icon icon-edit" onClick={this.editingTask}></button>
          <button className="icon icon-destroy" onClick={onDelete}></button>
        </div>
      )
    }
  }
  static defaultProps = {
    completeItem: () => {},
  }
  static propTypes = {
    completeItem: PropTypes.func,
  }
}
export default Task
