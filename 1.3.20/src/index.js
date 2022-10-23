import { createRoot } from "react-dom/client";

import Header from "./components/header";
import TaskList from "./components/task-list";
import Footer from "./components/footer";
import "./index.css";

const ToDoApp = () => {
  const todoData = [
    {
      status: "completed",
      discription: "Completed task",
      created: "created 17 seconds ago",
      edit: false,
      id: "comp",
    },
    {
      status: "editing",
      discription: "Editing task",
      created: "created 5 minutes ago",
      edit: true,
      id: "edit",
    },
    {
      status: "view",
      discription: "Active task",
      created: "created 5 minutes ago",
      edit: false,
      id: "view",
    },
  ];
  return (
    <section className="todoapp">
      <Header />
      <section className="main">
        <TaskList todos={todoData} />
      </section>
      <Footer />
    </section>
  );
};

const section = document.getElementById("root");
const root = createRoot(section);
root.render(<ToDoApp />);
