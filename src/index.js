import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
// import store from "./redux/store";
import storage from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
const { store, persistor } = storage;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
