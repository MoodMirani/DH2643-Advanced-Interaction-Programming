import React from "react";

import ReactDOM from "react-dom/client";

import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Expenses from "./pages/expenses";
import Invoices from "./pages/invoices";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div className="App">
      <h1>Bookkeeper!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
}

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
    </Routes>
  </BrowserRouter>
);
