import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
  <div className="container">
    <h1>🛍 Магазин одежды</h1>

    <div className="products">
      {products.map((p) => (
        <div className="card" key={p.id}>
          <img src={p.image} />
          <h4>{p.title.slice(0, 25)}</h4>
          <p>{p.price} $</p>

          <button onClick={() => addToCart(p)}>
            В корзину
          </button>
        </div>
      ))}
    </div>
  </div>
);
}

export default Home;