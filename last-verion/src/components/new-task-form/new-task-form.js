import React from 'react'
import './new-task-form.css'
export default class NewTaskForm extends React.Component {
  state = {
    label: '',
  }
  onInput = (e) => {
    this.setState({
      label: e.target.value,
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.label)
    this.setState({
      label: '',
    })
  }
  render() {
    return (
      <form className="task-form" onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          onChange={this.onInput}
          placeholder="What needs to be done?"
          value={this.state.label}
          autoFocus
        />
      </form>
    )
  }
}
