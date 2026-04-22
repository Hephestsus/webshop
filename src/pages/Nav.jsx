import { Link } from "react-router-dom";

function Nav() {
  return (
    <div style={{
      display: "flex",
      gap: 20,
      padding: 15,
      background: "#eee"
    }}>
      <Link to="/">Главная</Link>
      <Link to="/cart">Корзина 🛒</Link>
      <Link to="/login">Вход</Link>
      <Link to="/register">Регистрация</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/about">О нас</Link>
    </div>
  );
}

export default Nav;