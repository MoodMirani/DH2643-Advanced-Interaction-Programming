import React from "react";
import { Link } from "react-router-dom";

export default function Expenses() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
      <Link to="/invoices">Invoices</Link>
    </main>
  );
}
