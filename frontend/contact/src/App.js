import React from "react";
// import useToken from './useToken'
import { CssBaseline } from "@material-ui/core";
import Main from "./components/Main/Main";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <CssBaseline />
      <Switch>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/frequent">
          <Main />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
