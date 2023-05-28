import React from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import NavBar from "./components/navBar/navBarPresenter";
import "./app.scss";
import MyVisitedPubsPresenter from "./pages/MyVisitedPubs/MyVisitedPubsPresenter";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { createRoot } from "react-dom/client";

import { useAppSelector } from "./hooks/hooks";

import { loadMapApi } from "./components/utils/GoogleMapsUtils";
import RegisterPagePresenter from "./pages/register/RegisterPagePresenter";
import AddPubVisitPresenter from "./pages/addPubVisit/AddPubVisitPresenter";
import LoginPagePresenter from "./pages/login/LoginPagePresenter";

function App() {
  const registered = useAppSelector((state) => state.user.registered);

  return (
    <BrowserRouter>
      {registered ? (
        <div className="mainContainer">
          <NavBar />
          <Routes>
            <Route path="/" element={<MyVisitedPubsPresenter />} />
            <Route path="/visitedPubs" element={<MyVisitedPubsPresenter />} />
            <Route path="/addPubVisit" element={<AddPubVisitPresenter />} />
          </Routes>
        </div>
      ) : (
        <div className="mainContainer">
          <Routes>
            <Route path="/" element={<RegisterPagePresenter />} />
            <Route path="/register" element={<RegisterPagePresenter />} />
            <Route path="/login" element={<LoginPagePresenter />} />
          </Routes>
        </div>
      )}
    </BrowserRouter>
  );
}

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
