import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./components/Home.js";

//9f0b2b206db44fbd9fb27ca34e33c828  Api Key

function App() {
  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>
  );
}

export default App;
