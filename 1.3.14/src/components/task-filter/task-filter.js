import React from "react";
import "./task-filter.css";
export default class TaskFilter extends React.Component {
  render() {
    const { filterActive, filterShowAll, filterShowCompleted } = this.props;

    return (
      <ul className="filters">
        <li>
          <button onClick={filterShowAll}>All</button>
        </li>
        <li>
          <button onClick={filterActive}>Active</button>
        </li>
        <li>
          <button onClick={filterShowCompleted}>Completed</button>
        </li>
      </ul>
    );
  }
}
