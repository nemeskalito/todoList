"use client";

import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = ({ tasks, setTasks }) => {
  const deleteTask = (id) => {
    setTasks(tasks.filter((_, index) => index !== id));
  };
  return (
    <div className="taskList">
      {tasks.map((task, index) => (
        <div className="taskList__item">
          <Task key={task} task={task} index={index} deleteTask={deleteTask} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
