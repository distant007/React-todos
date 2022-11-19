/* eslint-disable prettier/prettier */
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import Header from '../Header'
import TaskList from '../TaskList'
import Footer from '../Footer'

import './app.css'

export default class ToDoApp extends React.Component {
  state = {
    todoData: [this.createItem('Completed task', 12, 25), this.createItem('Editing task', 12, 25), this.createItem('Active task', 12, 25)],
    filterSetButton: 'All',
  }
  addItem = (text, min, sec) => {
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, this.createItem(text, min, sec)],
      }
    })
  }
  createItem(text, min, sec) {
    if(min.length > 2){
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
    case 'Active':
      return todoData.filter((el) => !el.complete)
    case 'Completed':
      return todoData.filter((el) => el.complete)
    case 'All':
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
  setFilter = (button) => {
    this.setState({ filterSetButton: button })
  }
  setNewDiscription = (text, id) => {
    this.setState(({ todoData }) => {
      const currId = todoData.findIndex((el) => el.id === id)

      const currEl = todoData[currId]
      const newEl = { ...currEl, discription: text }

      const newArr = [...todoData.slice(0, currId), newEl, ...todoData.slice(currId + 1)]
      return {
        todoData: newArr,
      }
    })
  }
  onTimeChange = (id, min, sec) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((item) => (id === item.id ? { ...item, min: min, sec: sec } : { ...item })),
    }))
  }
  render() {
    const { todoData, filterSetButton } = this.state
    const completeCount = todoData.filter((el) => !el.complete).length
    const filteredTodos = this.filter(filterSetButton)
    return (
      <section className="todoapp">
        <Header addItem={this.addItem} />
        <section className="main">
          <TaskList
            todos={filteredTodos}
            onDeleted={this.deleteItem}
            completeItem={this.onToggleComplete}
            setNewDiscription={this.setNewDiscription}
            onTimeChange={this.onTimeChange}
          />
        </section>
        <Footer
          completeCount={completeCount}
          setFilter={this.setFilter}
          clearCompleted={this.clearCompleted}
          filterSetButton={filterSetButton}
        />
      </section>
    )
  }
}
