import React, { useState } from "react";
import Home from "./Home";
import Login from "./Login";
import Product from "./Product";
import SingleProduct from "./SingleProduct";
import Default from "./Default";
import ErrorPage from "./ErrorPage";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [state, setState] = useState(0);

  return (
    <div>
      <div className="nav">
        <Link to="home/product" className="nav-link">
          Product
        </Link>
        <Link to="home/login" className="nav-link">
          Login
        </Link>
      </div>
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route index element={<Default />} />

          <Route path="product" element={<Product />} />
          <Route path="product/:productId" element={<SingleProduct />} />

          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
