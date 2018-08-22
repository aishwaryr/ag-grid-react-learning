import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/ag-theme-balham.css";
import "react-datepicker/dist/react-datepicker.css";

import "./App.css";
import DataTable from "./DataTable";
import Data from "./Data";
import Msg from "./Msg";
import MyGrid from "./MyGrid";

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={DataTable} />
          <Route path="/data" component={Data} />
          <Route path="/msg" component={Msg} />
          <Route path="/mygrid" component={MyGrid} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default App;
