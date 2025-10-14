"use client";
import deleteTodo from "@/app/api/deleteTodo";
import Task from "../Task/Task";
import "./TaskList.css";
import FilterTasks from "../FilterTasks/FilterTasks";
import { useState } from "react";
import ClearTaskList from "../ClearTaskList/ClearTaskList";

const TaskList = ({ tasks, setTasks }) => {
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.isCompleted;
    if (filter === "finished") return task.isCompleted;
    return true;
  });

  const deleteTask = (id) => {
    deleteTodo(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="taskList">
      <FilterTasks filter={filter} setFilter={setFilter} />
      {filteredTasks.length === 0 && (
        <p style={{ textAlign: "center", fontSize: 30, marginTop: 30 }}>
          Cписок пуст
        </p>
      )}
      {filteredTasks
        .sort((a, b) => a.id - b.id)
        .map((task) => (
          <div key={task.id} className="taskList__item">
            <Task task={task} setTasks={setTasks} deleteTask={deleteTask} />
          </div>
        ))}
      <ClearTaskList tasks={tasks} setTasks={setTasks} filteredTasks={filteredTasks} />
    </div>
  );
};

export default TaskList;
