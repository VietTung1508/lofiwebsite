import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./components/GlobalStyle/index.js";
import App from "./App.js";
import { Provider } from "react-redux";
import store from "./redux/Store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalStyles>
  </React.StrictMode>
);
