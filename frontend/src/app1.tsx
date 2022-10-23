import React from "react";
import ReactDOM from 'react-dom/client';
import { getAPI } from "./webAPI/webAPI";
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Counter } from './components/counter/counter';
import NavBar from "./components/navBar/navBar";
import Grid from '@mui/material/Unstable_Grid2';
import './app.scss';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
//import SignUp from "./components/SignUp/SignUp";
// import SignIn from "./components/SignIn/SignIn";
import { createRoot } from 'react-dom/client';



const App = () => {
  const [fetchedData, setFetchedData] = React.useState("");

  /*Consider using Redux Thunk or Redux Saga here instead, to get
  data from API, as mentioned at 1:03:00 in Lecture 3. 
  
  The useEffect is fetching data here only for simplicity's sake.
  */

  var LoggedOut = true


  return (

    
    <div className="mainContainer">
      
      Hello
    
    </div>

    /* 
    <div>
      Hello World!<div>{` ${fetchedData}`}</div>
      <Counter/>
    </div>

      <div className="navBarContainer">
        <NavBar/>
      </div>
      <div className="page">
        this is a page
      </div>
    */
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
        <Grid container spacing={2} height={"100%"}>
          <Grid xs={3}>
            
          </Grid>
          <Grid xs={9}>
              <Routes>
                <Route path="/" element={<App />}>
              
                  </Route>
                  <Route path="/profile" element={<NavBar/>}>
                    
                  </Route>
                  <Route path="/map">
                    this is the map page
                  </Route>
                  <Route path="/login">
                    this is the login page
                  </Route>
                  <Route path="/register">
                    this is the register page
                  </Route>
                  <Route path="/patches">
                    this is the patches page
                  </Route>
                  <Route path="/drinks">
                    this is the drinks page
                  </Route>
                  <Route path="/visitedPubs">
                    this is the visitedPubs page
                  </Route>
              </Routes>
          </Grid>
        </Grid>
      </Router>
    
  </React.StrictMode>
);

