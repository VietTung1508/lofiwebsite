import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./components/GlobalStyle/index.js";
import App from "./App.js";
import { Provider } from "react-redux";
import store from "./redux/Store/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </GlobalStyles>
  </React.StrictMode>
);
