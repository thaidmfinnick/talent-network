import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Layout } from "./layouts/layout";
import { Provider } from "react-redux";
import { store } from "./redux/store";
export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
