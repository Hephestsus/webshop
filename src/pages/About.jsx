import { useState } from "react";

function About() {
  const [name, setName] = useState(" Мамытбеков Айдарбек");
  const [phone, setPhone] = useState("+7 33 33 33 33");
  const [email, setEmail] = useState("aidar@gmail.com");

  const save = () => {
    const data = { name, phone, email };
    localStorage.setItem("account", JSON.stringify(data));
    alert("Сохранено!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>ℹ️ О нас</h1>

      <p>
        Это простой интернет магазин одежды.
      </p>

      <hr />

      <h2>aidar@gmail.com</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, width: 300 }}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input value={email} onChange={(e) => setEmail(e.target.value)} />

        <button onClick={save}>Сохранить</button>
      </div>
    </div>
  );
}

export default About;