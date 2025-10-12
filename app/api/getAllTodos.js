"use client";
import { instance } from "../constants/index";

const baseURL = "https://todo-redev.herokuapp.com/api/todos?isCompleted=false";

const getAllTodos = async (setTasks) => {
  try {
    const response = await fetch(baseURL, {
      headers: instance.headers,
    });
    const data = await response.json();
    setTasks(data);
    console.log(data);
  } catch (error) {
    console.log("Ошибка при запросе: ", error);
  }
};

export default getAllTodos;
