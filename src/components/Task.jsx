export const Task = ({ task }) => {
  const { name, done } = task;

  return (
    <div>
      <li style={{ textDecoration: done ? "line-through" : "none" }}>
        {name} <input type="checkbox" checked={done} readOnly />
      </li>
      <button>📝</button>
      <button>🗑️</button>
    </div>
  );
};
