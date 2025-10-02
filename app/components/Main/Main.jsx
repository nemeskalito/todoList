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

  return (
    <div className="main">
      <div className="container">
        <div className="addTask">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
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
              {index + 1}. {task}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Main;
