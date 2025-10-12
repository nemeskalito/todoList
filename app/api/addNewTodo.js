"use client";
import { instance } from "../constants/index";

const baseURL = "https://todo-redev.herokuapp.com/api/todos";

const addNewTodo = async (task, setTasks) => {
  try {
    const response = await fetch(baseURL, {
      method: "POST",
      headers: instance.headers,
      body: JSON.stringify({ title: task }),
    });
    const data = await response.json();
    setTasks((tasks) => [...tasks, data]);
    console.log(data);
  } catch (error) {
    console.log("Ошибка при запросе: ", error);
  }
};

export default addNewTodo;
