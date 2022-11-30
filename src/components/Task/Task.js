import { useState } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

import Timer from '../Timer'

import './Task.css'

const Task = (props) => {
  const time = formatDistanceToNow(props.creationTime, {
    includeSeconds: true,
  })

  const [editText, setEditText] = useState(props.discription)
  const [editing, setEditing] = useState(false)

  const newDiscription = (e) => {
    setEditText(e.target.value)
  }
  const editingTask = () => {
    if (props.complete) {
      props.completeItem()
    }
    setEditing(true)
  }
  const submitEdit = (e) => {
    e.preventDefault()
    setEditing(false)
  }
  const { onDelete, completeItem, complete, setNewDiscription, id, discription, sec, onTimeChange } = props
  const editInput = editing ? (
    <Editing
      setNewDiscription={setNewDiscription}
      id={id}
      editText={editText}
      newDiscription={newDiscription}
      submitEdit={submitEdit}
    />
  ) : null
  const view = !editing ? (
    <View
      completeItem={completeItem}
      discription={discription}
      sec={sec}
      time={time}
      onDelete={onDelete}
      complete={complete}
      editingTask={editingTask}
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
const View = ({ completeItem, discription, sec, time, onDelete, complete, editingTask, id, onTimeChange }) => {
  return (
    <div className="view">
      <input className="toggle" type="checkbox" onChange={completeItem} checked={complete} />
      <label>
        <span className="title" onClick={completeItem}>
          {discription}
        </span>
        <Timer sec={sec} complete={complete} id={id} onTimeChange={onTimeChange} />
        <span className="description">created {time}</span>
      </label>
      <button className="icon icon-edit" onClick={editingTask}></button>
      <button className="icon icon-destroy" onClick={onDelete}></button>
    </div>
  )
}
Task.defaultProps = {
  completeItem: () => {},
}
Task.propTypes = {
  completeItem: PropTypes.func,
}
export default Task
