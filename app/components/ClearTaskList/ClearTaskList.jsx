"use client";
import "./ClearTaskList.css";

const ClearTaskList = ({ filteredTasks, tasks, setTasks }) => {
  return (
    <div className="footer">
      Кол-во: {filteredTasks.length}
      <button className="btn">Очистить завeршенные</button>
    </div>
  );
};

export default ClearTaskList;
