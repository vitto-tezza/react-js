import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NosotrosPage from "./pages/NosotrosPage";
import ContactoPage from "./pages/ContactoPage";
import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";
import ItemList from "./components/ItemList/ItemList";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";
import { CartProvider } from "./components/context/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            {/*NavBar*/}
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/TIENDA" element={<ItemList />} />
            <Route path="/NOSOTROS" element={<NosotrosPage />}></Route>
            <Route path="/CONTACTO" element={<ContactoPage />}></Route>
            {/*detalle de productos*/}
            <Route path="/product/:id" element={<Detail />} />
            {/*Carrito*/}
            <Route path="/Cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
