"use client";
import { useEffect, useState } from "react";
import "./Main.css";
import InputTask from "../InputTask/InputTask";
import TaskList from "../TaskList/TaskList";
import getAllTodos from "../../api/getAllTodos";

const Main = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTodos(setTasks);
  }, []);

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
