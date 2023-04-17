import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <Header />
      <form>
        <input type="text" placeholder="Add your new todo" />
        <button>+</button>
      </form>
      <TaskList />
      <p>You have two pending tasks</p>
      <button>CLEAR ALL</button>
    </div>
  );
}

export default App;
