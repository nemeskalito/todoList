"use client";
import deleteTodo from "@/app/api/deleteTodo";
import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = ({ tasks, setTasks }) => {
  const deleteTask = (id) => {
		deleteTodo(id)
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="taskList">
      {tasks.length === 0 && (
        <p style={{ textAlign: "center", fontSize: 30 }}>Cписок пуст</p>
      )}
      {tasks
        .sort((a, b) => a.id - b.id)
        .map((task) => (
          <div key={task.id} className="taskList__item">
            <Task
              task={task}
              setTasks={setTasks}
              deleteTask={deleteTask}
            />
          </div>
        ))}
    </div>
  );
};

export default TaskList;
