import {
  FilterButton,
  FilterButtonContainer,
  FiltersContainer,
  ItemsLeft,
} from "./TaskFilters.components";

const TaskFilters = ({
  total,
  activeFilter,
  showAllTasks,
  showActiveTasks,
  showCompletedTasks,
  handleClearComplete,
}) => {
  return (
    <FiltersContainer>
      <ItemsLeft total={total} />
      <FilterButtonContainer>
        <FilterButton
          action={() => showAllTasks()}
          active={activeFilter}
          filter="All"
        />
        <FilterButton
          action={() => showActiveTasks()}
          active={activeFilter}
          filter="Active"
        />
        <FilterButton
          action={() => showCompletedTasks()}
          active={activeFilter}
          filter="Completed"
        />
      </FilterButtonContainer>

      <button
        onClick={() => handleClearComplete()}
        className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
      >
        Clear Completed Tasks
      </button>
    </FiltersContainer>
  );
};

export { TaskFilters };
