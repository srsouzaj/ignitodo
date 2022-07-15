import { Header } from "./components/Header";
import { NewTask } from "./components/newTask";
import "./global.css";
function App() {
  return (
    <div className="App">
      <Header />
      <NewTask />
    </div>
  );
}

export default App;
