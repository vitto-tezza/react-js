import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemList from "./components/ItemList/ItemList";
import DetailPages from "./pages/DetailPages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="ContainerHeader">
        <NavBar />
      </div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ItemList />} />
            <Route path="/product" element={<DetailPages />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
