import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemList from "./components/ItemList/ItemList";

function App() {
  return (
    <div className="App">
      <div className="ContainerHeader">
        <NavBar />
      </div>
      <div>
        <ItemList />
      </div>
    </div>
  );
}

export default App;
