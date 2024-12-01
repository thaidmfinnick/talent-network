import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Layout } from "./layouts/layout";
import './config'
export const App = () => {
  return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
  );
};

export default App;
