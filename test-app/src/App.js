import React, { useState, useMemo, useEffect } from "react";
import "./App.css";
import UseFetch from "./hooks/UseFetch";

function App() {
  const [count, setCount] = useState(null);
  const [page, setPage] = useState("products");
  const [product, setProduct] = useState({ name: "", price: 0 });
  const url = `http://localhost:3000/${page}/${count ? count : ""}`;

  const data = UseFetch(url);

  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");

    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <React.Fragment>
      <pre className="App">{JSON.stringify(data, null, 2)}</pre>
      <button
        onClick={() => {
          setCount((currentCount) => currentCount + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setPage("products");
          setCount(null);
        }}
      >
        Products
      </button>
      <button
        className="button"
        onClick={() => {
          setPage("orders");
        }}
      >
        Orders
      </button>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={product.name}
          placeholder="Name..."
          onChange={(e) => {
            setProduct({
              ...product,
              name: e.target.value,
            });
          }}
        />
        <input
          type="text"
          value={product.price}
          placeholder="Price..."
          onChange={(e) => {
            setProduct({
              ...product,
              price: e.target.value,
            });
          }}
        />
        <button type="submit">POST</button>
      </form>
    </React.Fragment>
  );
}

export default App;
