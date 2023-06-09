import { useEffect, useState } from "react";

import { Title } from "./components/Title";

import { TaskInput } from "./components/TaskInput";

import { TaskList } from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Buy a new gaming laptop",
      completed: false,
    },
    {
      id: 2,
      title: "Complete a previous task",
      completed: false,
    },
    {
      id: 3,
      title: "Create video for YouTube",
      completed: true,
    },
    {
      id: 4,
      title: "Create a new portafolio site",
      completed: true,
    },
  ]);

  const [activeFilter, setActiveFilter] = useState("all");

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const addTask = (title) => {
    const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 1;

    const newTask = {
      id: lastId + 1,
      title,
      completed: false,
    };

    const taskList = [...tasks];
    taskList.push(newTask);

    setTasks(taskList);
  };

  const handleSetComplete = (id) => {
    const updatedList = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedList);
  };

  const handleClearComplete = () => {
    const updatedList = tasks.filter((task) => !task.completed);
    setTasks(updatedList);
  };

  const handleDelete = (id) => {
    const updatedList = tasks.filter((task) => task.id !== id);
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

  return (
    <div className="bg-gray-900 min-h-screen font-inter h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TaskInput addTask={addTask} />
        <TaskList
          activeFilter={activeFilter}
          tasks={filteredTasks}
          showAllTasks={showAllTasks}
          showActiveTasks={showActiveTasks}
          showCompletedTasks={showCompletedTasks}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
          handleClearComplete={handleClearComplete}
        />
      </div>
    </div>
  );
}

export default App;
