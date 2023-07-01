import { useEffect, useState } from "react";

function useTaskList() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const createTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      )
    );
  };

  const handleClearComplete = () => {
    const updatedList = tasks.filter((task) => !task.completed);
    setTasks(updatedList);
  };

  const showAllTasks = () => {
    setActiveFilter("all");
  };

  const showActiveTasks = () => {
    setActiveFilter("active");
  };

  const showCompletedTasks = () => {
    setActiveFilter("completed");
  };

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredTasks(tasks);
    } else if (activeFilter === "active") {
      const activeTasks = tasks.filter((task) => task.completed === false);
      setFilteredTasks(activeTasks);
    } else if (activeFilter === "completed") {
      const completedTasks = tasks.filter((task) => task.completed === true);
      setFilteredTasks(completedTasks);
    }
  }, [activeFilter, tasks]);

  return {
    tasks,
    activeFilter,
    filteredTasks,
    createTask,
    deleteTask,
    updateTask,
    showAllTasks,
    showActiveTasks,
    showCompletedTasks,
    handleClearComplete,
  };
}

export default useTaskList;
