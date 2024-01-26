import { HashRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./App.scss";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <HashRouter>
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </HashRouter>,
);
