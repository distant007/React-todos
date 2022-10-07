import Task from "../task";
import "./task-list.css";
const TaskList = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, status, edit, ...itemsProps } = item;
    const style = {
      display: edit ? "block" : "none",
    };
    return (
      <li id={id} className={status}>
        <Task {...itemsProps} />
        <input
          type="text"
          className="edit"
          placeholder="Editing task"
          style={style}
        ></input>
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};
export default TaskList;
