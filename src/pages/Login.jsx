import { useState } from "react";

function Login() {
  const [name, setName] = useState("");

  const login = () => {
    const saved = localStorage.getItem("user");

    if (saved === name) {
      alert("Добро пожаловать " + name);
    } else {
      alert("Пользователь не найден");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Вход</h1>

      <input
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={login}>Войти</button>
    </div>
  );
}

export default Login;