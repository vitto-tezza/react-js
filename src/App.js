import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ListProducts from "./components/ListProducts/ListProducts";

function App() {
  return (
    <div className="App">
      <div className="ContainerHeader">
        <NavBar />
      </div>
      <div>
        <ListProducts />
      </div>
    </div>
  );
}

export default App;
