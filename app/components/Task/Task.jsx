"use client";

import { useState } from "react";
import "./Task.css";
import editTodo from "@/app/api/editTodo";

const Task = ({ task, setTasks, deleteTask }) => {
  const [checked, setChecked] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editTask, setEditTask] = useState(task.title);

  const checkedChange = () => {
    setChecked((prev) => !prev);
    setTasks((tasks) =>
      tasks.map((t) => (t.id === task.id ? { ...t, isCompleted: !checked } : t))
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTasks((prev) =>
        prev.map((t) => (t.id === task.id ? { ...t, title: editTask } : t))
      );
      editTodo(task, editTask);
      setIsEdit((prev) => !prev);
    }
  };

  return (
    <>
      <input onClick={() => checkedChange()} type="checkbox" />
      {!isEdit ? (
        <div
          style={{ textDecoration: checked && "line-through" }}
          className="task"
        >
          {task.title}
        </div>
      ) : (
        <input
          style={{ width: "100%", zIndex: 1000, border: "1px solid white" }}
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
          onClick={() => deleteTask(task.id)}
          className="task__delete"
        ></button>
      </div>
    </>
  );
};

export default Task;
