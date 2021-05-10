import React from 'react'
import Login from './components/login/login'
import Register from './components/login/Register'
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'

function UnAuthenticated({token, setToken}) {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <Login token={token} setToken={setToken}/>
                </Route>
                <Route path="/register">
                    <Register setToken={setToken}/>
                </Route>
                <Login token={token} setToken={setToken}/>
            </Switch>
        </BrowserRouter>
    )
}

export default UnAuthenticated
