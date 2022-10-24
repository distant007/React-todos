/* eslint-disable prettier/prettier */
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import Header from '../Header'
import TaskList from '../Task-list'
import Footer from '../Footer'

import './app.css'

export default class ToDoApp extends React.Component {
  state = {
    todoData: [this.createItem('Completed task'), this.createItem('Editing task'), this.createItem('Active task')],
    filterSetButton: 'all',
  }
  addItem = (text) => {
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, this.createItem(text)],
      }
    })
  }
  createItem(text) {
    return {
      discription: text,
      id: uuidv4(),
      complete: false,
      editing: false,
    }
  }
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter((el) => el.id !== id),
      }
    })
  }
  onToggleComplete = (id) => {
    this.setState(({ todoData }) => {
      const currId = todoData.findIndex((el) => el.id === id)

      const currEl = todoData[currId]
      const newEl = { ...currEl, complete: !currEl.complete }

      const newArr = [...todoData.slice(0, currId), newEl, ...todoData.slice(currId + 1)]
      return {
        todoData: newArr,
      }
    })
  }
  filter(filter) {
    const { todoData } = this.state
    switch (filter) {
    case 'active':
      return todoData.filter((el) => !el.complete)
    case 'completed':
      return todoData.filter((el) => el.complete)
    case 'all':
    default:
      return todoData
    }
  }
  clearCompleted = () => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter((el) => el.complete !== true),
      }
    })
  }
  editTask = (id) => {
    this.setState(({ todoData }) => {
      const currId = todoData.findIndex((el) => el.id === id)

      const currEl = todoData[currId]
      const newEl = { ...currEl, editing: !currEl.editing }

      const newArr = [...todoData.slice(0, currId), newEl, ...todoData.slice(currId + 1)]
      return {
        todoData: newArr,
      }
    })
  }
  setNewDiscription = (e, id) => {
    this.setState(({ todoData }) => {
      const currId = todoData.findIndex((el) => el.id === id)
      const currEl = todoData[currId]
      const newEl = { ...currEl, discription: e.target.value }
      const newArr = [...todoData.slice(0, currId), newEl, ...todoData.slice(currId + 1)]
      return {
        todoData: newArr,
      }
    })
  }
  onSubmit = (e, id) => {
    e.preventDefault()
    this.setState(({ todoData }) => {
      const currId = todoData.findIndex((el) => el.id === id)
      const currEl = todoData[currId]
      const newEl = { ...currEl, editing: !currEl.editing }
      const newArr = [...todoData.slice(0, currId), newEl, ...todoData.slice(currId + 1)]
      return {
        todoData: newArr,
      }
    })
  }
  setCurrButton = (button) => {
    this.setState(() => {
      return {
        filterSetButton: button,
      }
    })
  }
  render() {
    const { todoData, filterSetButton, time } = this.state
    const completeCount = todoData.filter((el) => !el.complete).length
    const filteredTodos = this.filter(filterSetButton)
    return (
      <section className="todoapp">
        <Header addItem={this.addItem} />
        <section className="main">
          <TaskList
            todos={filteredTodos}
            time={time}
            onDeleted={this.deleteItem}
            completeItem={this.onToggleComplete}
            editTask={this.editTask}
            setNewDiscription={this.setNewDiscription}
            onSubmit={this.onSubmit}
          />
        </section>
        <Footer completeCount={completeCount} setCurrButton={this.setCurrButton} clearCompleted={this.clearCompleted} />
      </section>
    )
  }
}
