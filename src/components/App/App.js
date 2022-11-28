/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Header from '../Header'
import TaskList from '../TaskList'
import Footer from '../Footer'

import './App.css'
const App = () => {
  const createItem = (text, min, sec) => {
    if (min.length > 2) {
      min = '0'
    }
    return {
      discription: text,
      id: uuidv4(),
      complete: false,
      creationTime: new Date(),
      min: min,
      sec: sec,
    }
  }
  const [todoData, setToDoDate] = useState([
    createItem('Completed task', 12, 25),
    createItem('Editing task', 12, 25),
    createItem('Active task', 12, 25),
  ])
  const [filterSetButton, setFilter] = useState('all')

  const addItem = (text, min, sec) => {
    setToDoDate([...todoData, createItem(text, min, sec)])
  }

  const deleteItem = (id) => {
    setToDoDate(todoData.filter((el) => el.id !== id))
  }
  const onToggleComplete = (id) => {
    const currId = todoData.findIndex((el) => el.id === id)

    const currEl = todoData[currId]
    const newEl = { ...currEl, complete: !currEl.complete }

    const newArr = [...todoData.slice(0, currId), newEl, ...todoData.slice(currId + 1)]
    setToDoDate(newArr)
  }
  const filter = (filter) => {
    switch (filter) {
      case 'Active':
        return todoData.filter((el) => !el.complete)
      case 'Completed':
        return todoData.filter((el) => el.complete)
      case 'All':
      default:
        return todoData
    }
  }
  const clearCompleted = () => {
    const newDate = todoData.filter((el) => el.complete !== true)
    setToDoDate(newDate)
  }
  const setFilterButton = (button) => {
    setFilter(button)
  }
  const setNewDiscription = (text, id) => {
    const currId = todoData.findIndex((el) => el.id === id)

    const currEl = todoData[currId]
    const newEl = { ...currEl, discription: text }

    const newArr = [...todoData.slice(0, currId), newEl, ...todoData.slice(currId + 1)]
    setToDoDate(newArr)
  }
  const onTimeChange = (id, min, sec) => {
    const newArr = todoData.map((item) => (id === item.id ? { ...item, min: min, sec: sec } : { ...item }))
    setToDoDate(newArr)
  }

  // const { todoData, filterSetButton } = this.state
  const completeCount = todoData.filter((el) => !el.complete).length
  const filteredTodos = filter(filterSetButton)
  return (
    <section className="todoapp">
      <Header addItem={addItem} />
      <section className="main">
        <TaskList
          todos={filteredTodos}
          onDeleted={deleteItem}
          completeItem={onToggleComplete}
          setNewDiscription={setNewDiscription}
          onTimeChange={onTimeChange}
        />
      </section>
      <Footer
        completeCount={completeCount}
        setFilterButton={setFilterButton}
        clearCompleted={clearCompleted}
        filterSetButton={filterSetButton}
      />
    </section>
  )
}
export default App
