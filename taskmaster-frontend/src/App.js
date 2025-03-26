import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

const App = () => {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            {user ? (
              <>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/" onClick={() => logout()}>Logout</a></li>
              </>
            ) : (
              <>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Registrar</a></li>
              </>
            )}
          </ul>
        </nav>

        <Switch>
          <Route path="/login" render={() => (user ? <Redirect to="/dashboard" /> : <Login login={login} />)} />
          <Route path="/register" render={() => (user ? <Redirect to="/dashboard" /> : <Register login={login} />)} />
          <Route
            path="/dashboard"
            render={() => (user ? <Dashboard /> : <Redirect to="/login" />)}
          />
          <Redirect from="/" to={user ? "/dashboard" : "/login"} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
