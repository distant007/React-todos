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
    timerSwitch: null,
    min: this.props.min,
    sec: this.props.sec,
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
  startTimer = () => {
    if (this.state.timerSwitch === null) {
      this.setState(() => {
        return {
          timerSwitch: setInterval(this.timer, 1000),
        }
      })
    }
  }
  stopTimer = () => {
    clearInterval(this.state.timerSwitch)
    this.setState(() => {
      return {
        timerSwitch: null,
      }
    })
  }
  timer = () => {
    let second = this.state.sec
    let min = this.state.min
    second--
    if (second !== -1 && min !== 0) {
      this.setState(() => {
        return {
          sec: second,
        }
      })
    } else if (min === '0' && second === -1) {
      clearInterval(this.state.timerSwitch)
      this.setState(() => {
        return {
          min: 0,
          sec: 0,
          timerSwitch: null,
        }
      })
    } else {
      min--
      this.setState(() => {
        return {
          sec: 59,
          min: min,
        }
      })
    }
  }
  render() {
    const { onDelete, completeItem, complete, setNewDiscription, id, discription } = this.props
    const { editing, editText, time, min, sec } = this.state
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
        startTimer={this.startTimer}
        editingTask={this.editingTask}
        stopTimer={this.stopTimer}
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
const View = ({
  completeItem,
  discription,
  min,
  sec,
  time,
  onDelete,
  complete,
  startTimer,
  editingTask,
  stopTimer,
}) => {
  return (
    <div className="view">
      <input className="toggle" type="checkbox" onChange={completeItem} checked={complete} />
      <label>
        <span className="title" onClick={completeItem}>
          {discription}
        </span>
        <span className="description">
          <button className="icon icon-play" onClick={startTimer}></button>
          <button className="icon icon-pause" onClick={stopTimer}></button>
          {min}:{sec}
        </span>
        <span className="description">created {time}</span>
      </label>
      <button className="icon icon-edit" onClick={editingTask}></button>
      <button className="icon icon-destroy" onClick={onDelete}></button>
    </div>
  )
}
export default Task
