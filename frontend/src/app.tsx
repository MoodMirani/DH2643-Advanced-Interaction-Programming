import React from "react";

import ReactDOM from "react-dom";
import { getAPI } from "./webAPI/webAPI";
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Counter } from './components/counter/counter';
import NavBar from "./components/navBar/navBar";
import Grid from '@mui/material/Unstable_Grid2';
import './app.scss';
import Profile from "./components/Profile/Profile";
import AddVisit from "./components/addVisit/addVisit";
import MyPatches from "./components/MyPatches/MyPatches";
import MyDrinks from "./components/MyDrinks/MyDrinks";
import MyVisitedPubs from "./components/MyVisitedPubs/MyVisitedPubs";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Expenses from "./pages/expenses";
import Invoices from "./pages/invoices";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div className="App">
      <Link to="/profile">Profile</Link> | {" "}
      <Link to="/AddVisit">AddVisit</Link> | {" "}
      <Link to="/">Home</Link>
      
    </div>
  );
}

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(
  <div className="mainContainer ">
    <BrowserRouter>
    <Grid container spacing={2} height={"100%"}>
      <Grid xs={3}>
                <NavBar/>
      </Grid>

      <Grid xs={9}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="profile" element={<Profile />} />
          <Route path="AddVisit" element={<AddVisit />} />
          <Route path="MyPatches" element={<MyPatches />} />
          <Route path="MyDrinks" element={<MyDrinks />} />
          <Route path="MyVisitedPubs" element={<MyVisitedPubs />} />
        </Routes>
      </Grid>

    </Grid>
    </BrowserRouter>
  </div>
);

// <Link to="/expenses">Expenses</Link>