import { createRoot } from "react-dom/client";

import Header from "./components/header";
import TaskList from "./components/task-list";
import Footer from "./components/footer";
import "./index.css";
import React from "react";
import NewTaskForm from "./components/new-task-form";

class ToDoApp extends React.Component {
  state = {
    todoData: [
      {
        status: "completed",
        discription: "Completed task",
        created: "created 17 seconds ago",
        id: "comp",
      },
      {
        status: "editing",
        discription: "Editing task",
        created: "created 5 minutes ago",
        id: "edit",
      },
      {
        status: "view",
        discription: "Active task",
        created: "created 5 minutes ago",
        id: "view",
      },
    ],
  };
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const newData = todoData.filter((el) => el.id !== id);
      return {
        todoData: newData,
      };
    });
  };
  render() {
    return (
      <section className="todoapp">
        <Header />
        <section className="main">
          <TaskList todos={this.state.todoData} onDeleted={this.deleteItem} />
        </section>
        <Footer />
      </section>
    );
  }
}

const section = document.getElementById("root");
const root = createRoot(section);
root.render(<ToDoApp />);
