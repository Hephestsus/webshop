import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || []; // данные с браузер
    setCart(saved);
  }, []);

  const remove = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const clear = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // каунт
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: 20 }}>
      <h1>🛒 Корзина</h1>

      <h3>Сумма: {total.toFixed(2)} $</h3>

      <button onClick={clear}>Очистить</button>

      {cart.length === 0 ? (
        <p>Корзина пустая</p>
      ) : (
        cart.map((item, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            {item.title} - {item.price} $
            <button onClick={() => remove(i)}>Удалить</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;