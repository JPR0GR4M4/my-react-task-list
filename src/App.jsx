import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen font-inter h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Header />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
