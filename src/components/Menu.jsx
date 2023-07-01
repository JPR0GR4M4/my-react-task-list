import { Link } from "react-router-dom";
import React, { useState } from "react";

export function Menu() {
  let arr = [true, false, false, false, false, false];
  const [style, setStyle] = useState(arr);

  const selected = (props) => {
    let newArr = [...arr];
    for (let i = 0; i < newArr.length; i++) {
      newArr[i] = false;
    }
    newArr[props] = true;
    setStyle(newArr);
  };

  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="bg-white rounded shadow-lg py-5 px-7">
        <nav className="flex justify-between">
          <div className="flex items-center space-x-3 lg:pr-16 pr-6">
            <img
              className="cursor-pointer"
              width={34}
              height={34}
              viewBox="0 0 34 34"
              src="./src/assets/task-list-2.svg"
              fill="none"
            />
            <h2 className="font-normal text-2xl leading-6 text-gray-800">
              <u>Todo App</u>
            </h2>
          </div>
          <div className="hidden md:flex flex-auto space-x-2">
            <li
              onClick={() => selected(0)}
              className={`${
                style[0]
                  ? "text-white bg-gray-900"
                  : "text-gray-600 border border-white bg-gray-50"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={() => selected(2)}
              className={`${
                style[2]
                  ? "text-white bg-gray-900"
                  : "text-gray-600 border border-white bg-gray-50"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
            >
              <Link to="/TodoApp">Tasks</Link>
            </li>
            <li
              onClick={() => selected(1)}
              className={`${
                style[1]
                  ? "text-white bg-gray-900"
                  : "text-gray-600 border border-white bg-gray-50"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
            >
              <Link to="/AboutUsPage">About Us</Link>
            </li>
          </div>
        </nav>
      </div>
    </div>
  );
}
