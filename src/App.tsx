import { Header } from "./components/Header";
import { NewTask } from "./components/newTask";
import { Tasks } from "./components/Tasks";
import "./global.css";
function App() {
  return (
    <div className="App">
      <Header />
      <NewTask />
      <Tasks />
    </div>
  );
}

export default App;
