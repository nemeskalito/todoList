import "./Task.css";

const Task = ({ task, index, deleteTask }) => {
  return (
    <>
      <input className="task__accept" type="checkbox" />
      <div className="task">
        {index + 1}. {task}
      </div>
      <button
        key={task}
        onClick={() => deleteTask(index)}
        className="task__delete"
      ></button>
    </>
  );
};

export default Task;
