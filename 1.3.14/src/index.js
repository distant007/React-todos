import { createRoot } from "react-dom/client";
import Header from "./components/header";
import TaskList from "./components/task-list";
import Footer from "./components/footer";
import "./index.css";
import React from "react";

class ToDoApp extends React.Component {
  unicId = 1;
  state = {
    todoData: [
      this.createItem("Completed task"),
      this.createItem("Editing task"),
      this.createItem("Active task"),
    ],
  };

  addItem = (text) => {
    const newItem = this.createItem(text);
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
    console.log(this.state);
  };
  createItem(text) {
    return {
      discription: text,
      id: this.unicId++,
      complete: false,
      filterComplete: false,
    };
  }
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const newData = todoData.filter((el) => el.id !== id);
      return {
        todoData: newData,
      };
    });
  };
  onToggleComplete = (id) => {
    this.setState(({ todoData }) => {
      const currId = todoData.findIndex((el) => el.id === id);

      const currEl = todoData[currId];
      const newEl = { ...currEl, complete: !currEl.complete };

      const newArr = [
        ...todoData.slice(0, currId),
        newEl,
        ...todoData.slice(currId + 1),
      ];
      return {
        todoData: newArr,
      };
    });
  };
  filterActive = () => {
    this.setState(({ todoData }) => {
      const newArr = [];
      todoData.forEach((el) => {
        if (el.complete === true) {
          let item = { ...el, filterComplete: true };
          newArr.push(item);
        } else {
          let item = { ...el, filterComplete: false };
          newArr.push(item);
        }
      });
      return {
        todoData: newArr,
      };
    });
  };
  filterComplete = () => {
    this.setState(({ todoData }) => {
      const newArr = [];
      todoData.forEach((el) => {
        if (el.complete === false) {
          let item = { ...el, filterComplete: true };
          newArr.push(item);
        } else {
          let item = { ...el, filterComplete: false };
          newArr.push(item);
        }
      });
      return {
        todoData: newArr,
      };
    });
  };
  filterShowAll = () => {
    this.setState(({ todoData }) => {
      const newArr = [];
      todoData.forEach((el) => {
        if (el.filterComplete === true) {
          let item = { ...el, filterComplete: false };
          newArr.push(item);
        } else {
          newArr.push(el);
        }
      });
      return {
        todoData: newArr,
      };
    });
  };
  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const newArr = [];
      todoData.forEach((el) => {
        if (el.complete !== true) {
          newArr.push(el);
        }
      });
      return {
        todoData: newArr,
      };
    });
  };
  render() {
    const { todoData } = this.state;
    const completeCount = todoData.filter((el) => !el.complete).length;
    return (
      <section className="todoapp">
        <Header addItem={this.addItem} />
        <section className="main">
          <TaskList
            todos={todoData}
            onDeleted={this.deleteItem}
            completeItem={this.onToggleComplete}
          />
        </section>
        <Footer
          completeCount={completeCount}
          filterActive={this.filterActive}
          filterShowAll={this.filterShowAll}
          filterShowCompleted={this.filterComplete}
          clearCompleted={this.clearCompleted}
        />
      </section>
    );
  }
}

const section = document.getElementById("root");
const root = createRoot(section);
root.render(<ToDoApp />);
