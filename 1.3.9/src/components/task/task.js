import React from "react";
import { formatDistanceToNow } from "date-fns";
import "./task.css";
import { el } from "date-fns/locale";
class Task extends React.Component {
  constructor() {
    super();
    this.date = new Date();
    this.state = {
      time: formatDistanceToNow(this.date, {
        includeSeconds: true,
      }),
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: formatDistanceToNow(this.date, {
        includeSeconds: true,
      }),
    });
  }
  onInput(id) {
    const currEl = document.getElementById(id);
    currEl.classList.toggle("completed");
  }
  buttonEdit(id) {
    const currEl = document.getElementById(id);
    currEl.classList.toggle("editing");
  }
  render() {
    const { todos, onDelete } = this.props;

    const elements = todos.map((item) => {
      const { id, discription } = item;
      const style = {
        display: "none",
      };
      return (
        <li id={id}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onClick={() => {
                this.onInput(id);
              }}
            />
            <label>
              <span className="description">{discription}</span>
              <span className="created">created {this.state.time}</span>
            </label>
            <button
              className="icon icon-edit"
              onClick={() => {
                this.buttonEdit(id);
              }}
            ></button>
            <button
              className="icon icon-destroy"
              onClick={() => onDelete(id)}
            ></button>
          </div>
          <input
            type="text"
            className="edit"
            placeholder="Editing task"
          ></input>
        </li>
      );
    });

    return elements;
  }
}
export default Task;
