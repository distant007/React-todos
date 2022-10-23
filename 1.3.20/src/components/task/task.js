import React from "react";
import { formatDistanceToNow } from "date-fns";
import "./task.css";
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
  render() {
    const { discription } = this.props;
    return (
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{discription}</span>
          <span className="created">created {this.state.time}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    );
  }
}
export default Task;
