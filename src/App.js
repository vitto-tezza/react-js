import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListRemeras from "./components/ItemList/ItemListRemeras";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NosotrosPage from "./pages/NosotrosPage";
import ContactoPage from "./pages/ContactoPage";
import HomePage from "./pages/HomePage";
import DetailRemeras from "./pages/DetailRemeras";
import ItemListgorras from "./components/ItemList/ItemListGorras";
import TiendaPage from "./pages/TiendaPage";
import DetailGorras from "./pages/DetailGorras";
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
            <Route path="/REMERAS" element={<ItemListRemeras />}></Route>
            <Route path="/GORRAS" element={<ItemListgorras />}></Route>
            {/*detalle de productos*/}
            <Route path="/productRemeras/:id" element={<DetailRemeras />} />
            <Route path="/productGorras/:id" element={<DetailGorras />} />
            {/*Carrito*/}
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
