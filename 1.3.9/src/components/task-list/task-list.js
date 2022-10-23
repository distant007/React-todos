import React from "react";
import Task from "../task";
import "./task-list.css";
export default class TaskList extends React.Component {
  render() {
    const { todos, onDeleted } = this.props;
    return (
      <ul className="todo-list">
        <Task todos={todos} onDelete={(id) => onDeleted(id)} />
      </ul>
    );
  }
}
