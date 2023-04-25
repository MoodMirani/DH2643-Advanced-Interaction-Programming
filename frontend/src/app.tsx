import React from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import NavBar from "./components/navBar/navBar";
import "./app.scss";
import MyVisitedPubs from "./pages/MyVisitedPubs/MyVisitedPubsView";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { createRoot } from "react-dom/client";

import { useAppSelector } from "./hooks/hooks";

import { loadMapApi } from "./components/utils/GoogleMapsUtils";
import RegisterPageView from "./pages/register/registerPageView";

function App() {
  const registered = useAppSelector((state) => state.user.registered);

  return (
    <div className="mainContainer ">
      {registered ? (
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<MyVisitedPubs />} />
            <Route path="visitedPubs" element={<MyVisitedPubs />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <RegisterPageView />
      )}
    </div>
  );
}

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
