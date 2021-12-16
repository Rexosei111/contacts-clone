import React from "react";
import { CssBaseline } from "@material-ui/core";
import Main from "./components/main/Main";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login/Login";
import useToken from "./components/useToken";
import Detail from "./components/Detail/Detail";
import NewContact from "./components/New/NewContact";
import Register from "./components/Registration/Register";
import MergeFix from "./components/MergeFix.js/MergeFix";

function App() {
  const { token, setToken } = useToken();

  return (
    <Layout setToken={setToken}>
      <CssBaseline />
      <Switch>
        <Route path="/" render={() => <Main token={token} />} exact />
        <Route path="/frequent" render={() => <Main token={token} />} exact />
        <Route
          path="/suggestions"
          render={() => <MergeFix token={token} />}
          exact
        />
        <Route path="/new" render={() => <NewContact token={token} />} exact />
        <Route
          path="/login"
          render={() => <Login setToken={setToken} token={token} />}
          exact
        />
        <Route
          path="/register"
          render={() => <Register setToken={setToken} token={token} />}
          exact
        />
        <Route
          path="/contacts/:id"
          render={() => <Detail token={token} />}
          exact
        />
      </Switch>
    </Layout>
  );
}

export default App;
