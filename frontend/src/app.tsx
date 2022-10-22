import React from "react";
import ReactDOM from "react-dom";
import { getAPI } from "./webAPI/webAPI";
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Counter } from './components/counter/counter';
import NavBar from "./components/navBar/navBar";
import Grid from '@mui/material/Unstable_Grid2';
import './app.scss';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const App = () => {
  const [fetchedData, setFetchedData] = React.useState("");

  /*Consider using Redux Thunk or Redux Saga here instead, to get
  data from API, as mentioned at 1:03:00 in Lecture 3. 
  
  The useEffect is fetching data here only for simplicity's sake.
  */
  React.useEffect(() => {
    getAPI()
      .then((data) => {
        setFetchedData(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (

    
    <div className="mainContainer">
      <Router>
        <Grid container spacing={2} height={"100%"}>
          <Grid xs={3}>
            <NavBar/>
          </Grid>
          <Grid xs={9}>
              <Routes>
                <Route path="/">
                    this is the main page
                  </Route>
                  <Route path="/profile">
                    this is the profile page
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

ReactDOM.render(
  <Provider store={store}>¨
    <App />
    </Provider>, 
  document.querySelector("#app")
); // #app targets the div that has id = "app"
