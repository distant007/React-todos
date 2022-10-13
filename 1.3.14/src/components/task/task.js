import React from "react";
import { formatDistanceToNow } from "date-fns";
import "./task.css";

class Task extends React.Component {
  date = new Date();
  state = {
    time: formatDistanceToNow(this.date, {
      includeSeconds: true,
    }),
  };
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
  render() {
    const { discription, onDelete, completeItem } = this.props;
    const { time } = this.state;
    // let classNames = "view";
    // if (complete) {
    //   classNames = "completed";
    // }
    return (
      <div className="view">
        <input className="toggle" type="checkbox" onClick={completeItem} />
        <label>
          <span className="description">{discription}</span>
          <span className="created">created {time}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={onDelete}></button>
      </div>
    );
  }
}
export default Task;
