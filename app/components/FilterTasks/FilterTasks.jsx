"use client";
import "./FilterTasks.css";

const FilterTasks = ({ filter, setFilter }) => {
  return (
    <select
      className="select"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    >
      <option className="option" value="all">
        Все
      </option>
      <option className="option" value="active">
        Активные
      </option>
      <option className="option" value="finished">
        Завeршенные
      </option>
    </select>
  );
};

export default FilterTasks;
