import { Task } from "./Task";
import { TaskFilters } from "./TaskFilters";

const TaskList = ({
  tasks,
  activeFilter,
  handleSetComplete,
  handleDelete,
  handleTaskChange,
  handleClearComplete,
  showAllTasks,
  showActiveTasks,
  showCompletedTasks,
}) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
          handleTaskChange={handleTaskChange}
        />
      ))}
      <TaskFilters
        activeFilter={activeFilter}
        total={tasks.length}
        showAllTasks={showAllTasks}
        showActiveTasks={showActiveTasks}
        showCompletedTasks={showCompletedTasks}
        handleClearComplete={handleClearComplete}
      />
    </div>
  );
};

export { TaskList };
