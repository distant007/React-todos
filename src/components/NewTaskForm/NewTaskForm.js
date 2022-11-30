import { useState } from 'react'
import './NewTaskForm.css'
const NewTaskForm = (props) => {
  const [label, setLabel] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (label !== '' && min !== '' && sec !== '') {
      const second = min * 60 + Number(sec)
      props.addItem(label, second)
      setLabel('')
      setMin('')
      setSec('')
    }
  }
  return (
    <form className="new-todo-form" onSubmit={onSubmit}>
      <input
        className="new-todo"
        type="text"
        onChange={(e) => setLabel(e.target.value)}
        placeholder="What needs to be done?"
        value={label}
      />
      <input
        className="new-todo-form__timer"
        type="number"
        onChange={(e) => setMin(e.target.value)}
        min="0"
        max="59"
        step="1"
        placeholder="Min"
        value={min}
      />
      <input
        className="new-todo-form__timer"
        type="number"
        min="0"
        max="59"
        onChange={(e) => setSec(e.target.value)}
        placeholder="Sec"
        value={sec}
      />
      <input className="hidden" type="submit" />
    </form>
  )
}
export default NewTaskForm
