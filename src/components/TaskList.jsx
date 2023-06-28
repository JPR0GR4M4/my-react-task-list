import { useState } from "react";
import { TaskFilters } from "./TaskFilters";
import Task from "./Task";
import useTaskList from "../hooks/useTaskList";

const TaskList = () => {
  const {
    tasks,
    activeFilter,
    filteredTasks,
    createTask,
    updateTask,
    deleteTask,
    showAllTasks,
    showActiveTasks,
    showCompletedTasks,
    handleClearComplete,
  } = useTaskList();

  const handleTaskEdit = (id, updatedTask) => {
    updateTask(id, updatedTask);
  };
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const handleTaskToggle = (id) => {
    const updatedTask = tasks.find((task) => task.id === id);
    updateTask(id, { completed: !updatedTask.completed });
  };

  const handleTaskDelete = (id) => {
    deleteTask(id);
  };

  const handleTaskAdd = () => {
    const newTask = {
      id: Date.now(),
      name: newTaskName,
      description: newTaskDescription,
      completed: false,
    };
    createTask(newTask);
    setNewTaskName("");
    setNewTaskDescription("");
  };

  return (
    <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-white shadow-none">
      <form
        onSubmit={handleTaskAdd}
        className="mt-8 mb-2 w-80 sm:w-full group"
        noValidate
      >
        <div className="flex flex-col">
          <div className="relative h-full w-full">
            <input
              className="peer h-full w-full rounded-lg border border-white border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-white"
              type="text"
              name="title"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
              placeholder=" "
              required
              pattern=".{3,}"
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-slate-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-white before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-slate-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
              What's Next Task
            </label>
            <span class="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
              The task must have a minimum of 3 characters
            </span>
          </div>
          <br />
          <div className="relative h-full w-full">
            <input
              className="peer h-16 w-full rounded-lg border border-white border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-white"
              type="text"
              name="description"
              value={newTaskDescription}
              onChange={(e) => setNewTaskDescription(e.target.value)}
              placeholder=" "
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-slate-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-white before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-slate-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
              Short Description
            </label>
          </div>
        </div>
        <button
          className="mt-6 block w-full select-none rounded-lg border border-white hover:border-white bg-transparent hover:bg-white hover:text-black py-3 px-6 text-center align-middle text-s font-sans text-white shadow-md shadow-white/20 transition-all hover:shadow-lg hover:shadow-white/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none group-invalid:pointer-events-none group-invalid:opacity-30"
          type="submit"
          value="add task"
          onClick={handleTaskAdd}
        >
          « Create Task »
        </button>
      </form>
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleTaskToggle={handleTaskToggle}
          handleTaskDelete={handleTaskDelete}
          handleTaskEdit={handleTaskEdit}
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

export default TaskList;
