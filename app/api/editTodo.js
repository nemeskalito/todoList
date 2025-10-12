"use client";
import { instance } from "../constants/index";

const baseURL = "https://todo-redev.herokuapp.com/api/todos/";

const editTodo = async (task, editTask) => {
  try {
    const response = await fetch(baseURL + task.id, {
      method: "PATCH",
      headers: instance.headers,
      body: JSON.stringify({ title: editTask }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Ошибка при запросе: ", error);
  }
};

export default editTodo;
