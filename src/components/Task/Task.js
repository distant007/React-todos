import React from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

import Timer from '../Timer'

import './task.css'

class Task extends React.Component {
  state = {
    time: formatDistanceToNow(this.props.creationTime, {
      includeSeconds: true,
    }),
    editText: this.props.discription,
    editing: false,
  }
  newDiscription = (e) => {
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
  submitEdit = (e) => {
    e.preventDefault()
    this.setState(() => {
      return {
        editing: false,
      }
    })
  }
  render() {
    const { onDelete, completeItem, complete, setNewDiscription, id, discription, min, sec, onTimeChange } = this.props
    const { editing, editText, time } = this.state
    const editInput = editing ? (
      <Editing
        setNewDiscription={setNewDiscription}
        id={id}
        editText={editText}
        newDiscription={this.newDiscription}
        submitEdit={this.submitEdit}
      />
    ) : null
    const view = !editing ? (
      <View
        completeItem={completeItem}
        discription={discription}
        min={min}
        sec={sec}
        time={time}
        onDelete={onDelete}
        complete={complete}
        editingTask={this.editingTask}
        id={id}
        onTimeChange={onTimeChange}
      />
    ) : null

    return (
      <div>
        {editInput}
        {view}
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
const Editing = ({ setNewDiscription, editText, id, newDiscription, submitEdit }) => {
  return (
    <form
      className="form-edit"
      onSubmit={(e) => {
        setNewDiscription(editText, id)
        submitEdit(e)
      }}
    >
      <input type="text" className="edit" value={editText} onChange={(e) => newDiscription(e)} autoFocus></input>
    </form>
  )
}
const View = ({ completeItem, discription, min, sec, time, onDelete, complete, editingTask, id, onTimeChange }) => {
  return (
    <div className="view">
      <input className="toggle" type="checkbox" onChange={completeItem} checked={complete} />
      <label>
        <span className="title" onClick={completeItem}>
          {discription}
        </span>
        <Timer min={min} sec={sec} complete={complete} id={id} onTimeChange={onTimeChange} />
        <span className="description">created {time}</span>
      </label>
      <button className="icon icon-edit" onClick={editingTask}></button>
      <button className="icon icon-destroy" onClick={onDelete}></button>
    </div>
  )
}
export default Task
