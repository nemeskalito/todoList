"use client";

import { useState } from "react";
import "./Task.css";

const Task = ({ task, setTasks, index, deleteTask }) => {
  const [checked, setChecked] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editTask, setEditTask] = useState(task);

  const checkedChange = () => {
    setChecked((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTasks((prevTask) =>
        prevTask.map((task, i) => (i === index ? editTask : task))
      );
    }
		
  };

  return (
    <>
      <input
        onClick={() => checkedChange()}
        className="task__accept"
        type="checkbox"
      />
      {!isEdit ? (
        <div
          style={{ textDecoration: checked && "line-through" }}
          className="task"
        >
          {task}
        </div>
      ) : (
        <input
          style={{ width: "100%", zIndex: 1000 }}
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      )}
      <div className="buttons">
        <button
          className="task__change"
          onClick={() => setIsEdit((prev) => !prev)}
        ></button>
        <button
          onClick={() => deleteTask(index)}
          className="task__delete"
        ></button>
      </div>
    </>
  );
};

export default Task;
