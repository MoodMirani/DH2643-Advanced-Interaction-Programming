import React, { useState } from "react";

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

import LoginScreen from "./components/login/login";
import SignUp from "./components/SignUp/SignUp";
import { useAppSelector, useAppDispatch } from './hooks'
import { setFirstName } from "./redux/UserSlice";
import PrintUserState from "./PrintUserState";




import { loadMapApi } from './components/utils/GoogleMapsUtils';
//import Map from "./components/Map/Map";


function App() {
  return (
    <div className="App">
      <SignUp/>
    </div>
  );
  
}

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(
  <div className="mainContainer ">

    <Provider store ={store}>
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
              <Route path="LoginScreen" element={<LoginScreen />} />
              <Route path="SignUp" element={<SignUp />} />
              <Route path="Map" element={<Profile/>}/>
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
    </Provider>
  </div>
);

// <Link to="/expenses">Expenses</Link>