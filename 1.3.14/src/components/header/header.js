import React from "react";
import NewTaskForm from "../new-task-form";
import "./header.css";
export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addItem={this.props.addItem} />
      </header>
    );
  }
}
