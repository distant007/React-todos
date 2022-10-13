import React from "react";
import TaskFilter from "../task-filter";
import "./footer.css";
export default class Footer extends React.Component {
  render() {
    const {
      completeCount,
      filterActive,
      filterShowAll,
      filterShowCompleted,
      clearCompleted,
    } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{completeCount} items left</span>
        <TaskFilter
          filterActive={filterActive}
          filterShowAll={filterShowAll}
          filterShowCompleted={filterShowCompleted}
        />
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}
