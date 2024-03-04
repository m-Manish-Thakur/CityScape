import React from "react";
import Router from "./Router";
import store from "./Utils/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
};

export default App;
