import React from "react";
import ReactDOM from "react-dom";
import { getAPI } from "./webAPI/webAPI";
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Counter } from './components/counter/counter';

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
    
    <div>
      Hello World!<div>{` ${fetchedData}`}</div>
      <Counter/>
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>¨
    <App />
    </Provider>, 
  document.querySelector("#app")
); // #app targets the div that has id = "app"
