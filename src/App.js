import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NosotrosPage from "./pages/NosotrosPage";
import ContactoPage from "./pages/ContactoPage";
import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";
import ItemList from "./components/ItemList/ItemList";
import TiendaPage from "./pages/TiendaPage";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            {/*NavBar*/}
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/TIENDA" element={<TiendaPage />} />
            <Route path="/NOSOTROS" element={<NosotrosPage />}></Route>
            <Route path="/CONTACTO" element={<ContactoPage />}></Route>
            {/*NavBar de productos*/}
            <Route path="/categori/:id" element={<ItemList />}></Route>
            {/*detalle de productos*/}
            <Route path="/product/:category/:id" element={<Detail />} />
            {/*Carrito*/}
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
