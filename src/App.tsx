import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CounterPage from "./views/CounterPage";
import TablePage from "./views/TablePage";

export default function App(): ReactElement {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={CounterPage} />
        <Route exact path="/table-page" component={TablePage} />
      </Switch>
    </Router>
  );
}
