import React from "react";
import { CssBaseline } from "@material-ui/core";
import Main from "./components/Main/Main";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login/Login";
import useToken from './components/useToken'

function App() {
  const {token, setToken} = useToken()

  return (
    <Layout>
      <CssBaseline />
      <Switch>
        <Route path="/" render={() => <Main token={token}/>} exact />
        <Route path="/frequent" render={() => <Main token={token} />} exact />
        <Route path="/login" render={() => <Login setToken={setToken} token={token} />} exact />
      </Switch>
    </Layout>
  );
}

export default App;
