import TaskList from "./components/TaskList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { Menu } from "./components/Menu";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <div className="bg-gray-900 h-full font-inter text-gray-200 flex items-center justify-center py-10 px-5">
          <div className="container flex flex-col max-w-xl">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/AboutUsPage" element={<AboutUsPage />} />
              <Route path="/TodoApp" element={<TaskList />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
