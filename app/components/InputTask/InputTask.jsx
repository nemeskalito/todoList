
"use client";

import { useState } from "react";
import "./InputTask.css";

const InputTask = ({ setTasks }) => {
  const [inputValue, setInputValue] = useState("");

  const addTask = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTasks((tasks) => [...tasks, inputValue]);
      setInputValue("");
    }
  };

  const handleClick = () => {
    if (inputValue.trim() !== "") {
      setTasks((tasks) => [...tasks, inputValue]);
      setInputValue("");
    }
  };

  return (
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
      </button>{" "}
    </div>
  );
};

export default InputTask;
