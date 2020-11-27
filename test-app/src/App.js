import React, { useState } from "react";
import "./App.css";
import UseFetch from "./hooks/UseFetch";

function App() {
  const [count, setCount] = useState(null);
  const [page, setPage] = useState("products");
  const url = `http://localhost:3000/${page}/${count ? count : ""}`;

  const data = UseFetch(url);

  console.log(data);
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
    </React.Fragment>
  );
}

export default App;
