import "./App.css";
import DataFetching from "./components/DataFetching/DataFetching";
import Day002 from "./components/Day002/Day002";
import ProjectList from "./components/ProjectList/ProjectList";

function App() {
  return (
    <div>
      <ProjectList />
      <DataFetching />
      <Day002 />
    </div>
  );
}

export default App;
