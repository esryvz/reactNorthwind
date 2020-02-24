import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import myReducer from "./Reducers/myReducer";
import thunk from 'redux-thunk'

const store = createStore(myReducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store ={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
