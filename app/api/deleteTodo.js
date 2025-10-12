"use client";

import { instance } from "../constants";

const baseURL = `https://todo-redev.herokuapp.com/api/todos/`;

const deleteTodo = async (id) => {
  try {
    const response = await fetch(baseURL + id, {
      method: "DELETE",
      headers: instance.headers,
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Ошибка при запросе: ", error);
  }
};

export default deleteTodo;
