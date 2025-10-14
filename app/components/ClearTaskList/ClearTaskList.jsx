"use client";
import deleteTodo from "@/app/api/deleteTodo";
import "./ClearTaskList.css";

const ClearTaskList = ({ filteredTasks, setTasks }) => {
  const clearList = async () => {
    const completedTasks = filteredTasks.filter((task) => task.isCompleted);

    await Promise.all(completedTasks.map((task) => deleteTodo(task.id)));

    setTasks((prev) => prev.filter((task) => !task.isCompleted));
  };
  return (
    <div className="footer">
      Кол-во: {filteredTasks.length}
      <button className="btn" onClick={clearList}>
        Очистить завeршённые
      </button>
    </div>
  );
};

export default ClearTaskList;
