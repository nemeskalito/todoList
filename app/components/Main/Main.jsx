"use client";
import { useState } from "react";
import "./Main.css";

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleClick = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const addTask = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const deleteTask = (id) => {
    const updateItems = tasks.filter((task, index) => index !== id);
    setTasks(updateItems);
  };

  return (
    <div className="main">
      <div className="container">
        <div className="addTask">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => addTask(e)}
            className="addTask__input"
            type="text"
          />
          <button onClick={handleClick} className="addTask__btn">
            Добавить
          </button>
        </div>
        <div className="taskList">
          {tasks.map((task, index) => (
            <div key={task} className="taskList__item">
              <button className="taskList__accept"></button>
              <div className="taskList__task">
                {index + 1}. {task}
              </div>
              <button
                key={task}
                onClick={() => deleteTask(index)}
                className="taskList__delete"
              ></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Main;
