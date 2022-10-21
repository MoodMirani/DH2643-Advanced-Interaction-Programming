import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import { getAPI } from "./webAPI/webAPI";
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Counter } from './components/counter/counter';
import { loadMapApi } from './components/utils/GoogleMapsUtils';
import Map from './components/map/map';

const App = () => {
  const [fetchedData, setFetchedData] = React.useState("");
  const [scriptLoaded, setScriptLoaded] = React.useState(false);

  /*Consider using Redux Thunk or Redux Saga here instead, to get
  data from API, as mentioned at 1:03:00 in Lecture 3. 
  
  The useEffect is fetching data here only for simplicity's sake.
  */

  React.useEffect(() => {
    const googleMapScript = loadMapApi();
    googleMapScript.addEventListener('load', function () {
      setScriptLoaded(true);
    });
  }, []);

  React.useEffect(() => {
    getAPI()
      .then((data) => {
        setFetchedData(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    
    <div>
      Hello World!<div>{` ${fetchedData}`}</div>
      {scriptLoaded &&(
        <Map
        mapType={google.maps.MapTypeId.ROADMAP}
        mapTypeControl={true}
      />
      )
      }     
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>¨
    <App />
    </Provider>, 
  document.querySelector("#app")
); // #app targets the div that has id = "app"
