import { Task } from "./Task";

export const TaskList = () => {
  const tasks = [
    { id: 1, name: "Buy a new gaming laptop", done: false },
    { id: 2, name: "Complete a previous task", done: false },
    { id: 3, name: "Create video for YouTube", done: true },
    { id: 4, name: "Create a new portafolio site", done: true },
  ];

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};
