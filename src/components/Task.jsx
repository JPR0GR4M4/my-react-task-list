import React, { useState } from "react";

function Task({ task, handleTaskToggle, handleTaskDelete, handleTaskEdit }) {
  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);

  function handleChange() {
    handleTaskToggle(task.id);
  }

  function handleDelete() {
    handleTaskDelete(task.id);
  }

  function handleEdit() {
    setEditMode(true);
  }

  function handleSave() {
    const updatedTask = {
      ...task,
      name: editedName,
      description: editedDescription,
    };

    handleTaskEdit(task.id, updatedTask);
    setEditMode(false);
  }

  return (
    <div className="mt-6">
      {editMode ? (
        <div className="flex items-center">
          <div className="relative h-full w-full">
            <input
              className="peer h-full w-full rounded-lg border border-white border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-white"
              type="text"
              name="title"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              placeholder=" "
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-slate-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-white before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-slate-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
              Edit Task
            </label>
          </div>
          <div className="relative h-full w-full">
            <input
              className="peer h-full w-full rounded-lg border border-white border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-white"
              type="text"
              name="description"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              placeholder=" "
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-slate-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-white before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-slate-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
              Edit Description
            </label>
          </div>
          <button
            className="h-full w-19 select-none rounded-lg border border-white hover:border-white bg-transparent hover:bg-white hover:text-black py-2 px-6 text-center align-middle text-xl font-sans text-white shadow-md shadow-white/20 transition-all hover:shadow-lg hover:shadow-white/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            value="add task"
            onClick={handleSave}
          >
            ✓
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between p-4 rounded-lg border border-white bg-transparent">
          <div className="flex items-center">
            {task.completed ? (
              <div
                onClick={handleChange}
                className="bg-green-700 p-1 rounded-full cursor-pointer"
              >
                <img
                  className="h-4 w-4 "
                  src="/check-icon.svg"
                  alt="Check Icon"
                />
              </div>
            ) : (
              <div
                onClick={handleChange}
                className={`border border-gray-500 border-solid p-3 rounded-full cursor-pointer`}
              ></div>
            )}
            <p className={"pl-3 " + (task.completed && "line-through")}>
              {task.name}
              <br />
              <span className={"text-xs text-slate-400"}>
                {task.description}
              </span>
            </p>
          </div>
          <div className="flex space-x-4">
            <img
              onClick={handleEdit}
              className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in"
              src="/edit-icon.svg"
              alt="Edit Icon"
            />
            <img
              onClick={handleDelete}
              className="h-6 w-6 cursor-pointer transition-all duration-300 ease-in"
              src="/close-icon.svg"
              alt="Close Icon"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Task;
