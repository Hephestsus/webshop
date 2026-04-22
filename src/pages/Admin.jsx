import { useEffect, useState } from "react";

function Admin() {
  const [isAuth, setIsAuth] = useState(false);

  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  
  const login = (e) => {
    e.preventDefault();

    const user = e.target.user.value;
    const pass = e.target.pass.value;

    if (user === "admin" && pass === "1234") {
      setIsAuth(true);
      localStorage.setItem("admin", "true");
    } else {
      alert("Неверный логин");
    }
  };

  
  useEffect(() => {
    const auth = localStorage.getItem("admin");

    if (auth === "true") setIsAuth(true);

    const saved = JSON.parse(localStorage.getItem("products"));

    if (saved) {
      setProducts(saved);
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          localStorage.setItem("products", JSON.stringify(data));
        });
    }
  }, []);

  
  const save = (data) => {
    setProducts(data);
    localStorage.setItem("products", JSON.stringify(data));
  };

  
  const remove = (id) => {
    const updated = products.filter((p) => p.id !== id);
    save(updated);
  };

  // добавить
  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      title,
      price: Number(price),
      image: "https://via.placeholder.com/150",
    };

    save([...products, newProduct]);
    setTitle("");
    setPrice("");
  };

  // если незареган
  if (!isAuth) {
    return (
      <div style={{ padding: 20 }}>
        <h1>🔐 Admin Login</h1>

        <form onSubmit={login}>
          <input name="user" placeholder="login" />
          <br />
          <input name="pass" placeholder="password" type="password" />
          <br />
          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }


  return (
    <div style={{ padding: 20 }}>
      <h1>⚙️ Admin Panel</h1>

      
      <div style={{ marginBottom: 20 }}>
        <h3>➕ Добавить товар</h3>

        <input
          placeholder="Название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Цена"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button onClick={addProduct}>Добавить</button>
      </div>

      
      {products.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ddd",
            padding: 10,
            marginBottom: 10,
          }}
        >
          <h4>{p.title}</h4>
          <p>{p.price} $</p>

          <button onClick={() => remove(p.id)}>Удалить</button>
        </div>
      ))}
    </div>
  );
}

export default Admin;