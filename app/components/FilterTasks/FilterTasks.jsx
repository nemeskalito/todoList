"use client";
import "./FilterTasks.css";

const FilterTasks = ({ isSorted, sortedTasks, filter, setFilter }) => {
  return (
    <div className="filter">
      <button className="noteAll"></button>
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
      <button onClick={sortedTasks} className="sorter">
        <img src={isSorted ? "sortArrowDown.svg" : "sortArrowUp.svg"} alt="" />
      </button>
    </div>
  );
};

export default FilterTasks;
