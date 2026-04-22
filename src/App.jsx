import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Admin from "./pages/Admin";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Nav from "./pages/Nav";

function App() {
  return (
    <BrowserRouter>

      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;