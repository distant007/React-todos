import React from 'react'
import './new-task-form.css'
export default class NewTaskForm extends React.Component {
  state = {
    label: '',
    min: '',
    sec: '',
  }
  onInput = (e) => {
    this.setState({
      label: e.target.value,
    })
  }
  setSec = (e) => {
    this.setState({
      sec: e.target.value,
    })
  }
  setMin = (e) => {
    this.setState({
      min: e.target.value,
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    const { label, min, sec } = this.state
    if (label !== '' && min !== '' && sec !== '') {
      this.props.addItem(label, min, sec)
      this.setState({
        label: '',
        min: '',
        sec: '',
      })
    }
  }
  render() {
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          type="text"
          onChange={this.onInput}
          placeholder="What needs to be done?"
          value={this.state.label}
        />
        <input
          className="new-todo-form__timer"
          type="number"
          onChange={this.setMin}
          placeholder="Min"
          value={this.state.min}
        />
        <input
          className="new-todo-form__timer"
          type="number"
          onChange={this.setSec}
          placeholder="Sec"
          value={this.state.sec}
        />
        <input className="hidden" type="submit" />
      </form>
    )
  }
}
