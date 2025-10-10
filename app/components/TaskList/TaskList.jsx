"use client";

import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = ({ tasks, setTasks }) => {
  const deleteTask = (id) => {
    setTasks(tasks.filter((_, index) => index !== id));
  };

  return (
    <div className="taskList">
      {tasks.length === 0 && (
        <p style={{ textAlign: "center", fontSize: 30 }}>Cписок пуст</p>
      )}
      {tasks.map((task, index) => (
        <div key={index + 1} className="taskList__item">
          <Task
            task={task}
            setTasks={setTasks}
            index={index}
            deleteTask={deleteTask}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
