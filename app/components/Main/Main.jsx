"use client";
import { useState } from "react";
import "./Main.css";
import InputTask from "../InputTask/InputTask";
import TaskList from "../TaskList/TaskList";

const Main = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="main">
      <div className="container">
        <InputTask setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
};
export default Main;
