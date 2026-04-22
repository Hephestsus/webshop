import { useState } from "react";

function Register() {
  const [name, setName] = useState("");

  const register = () => {
    localStorage.setItem("user", name);
    alert("Зарегистрирован: " + name);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Регистрация</h1>

      <input
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={register}>Зарегистрироваться</button>
    </div>
  );
}

export default Register;