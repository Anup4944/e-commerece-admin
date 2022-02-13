import React from "react";
import { Sidebar } from "./component/sidebar/Sidebar";
import { Topbar } from "./component/topbar/Topbar";
import "./app.css";
import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserList } from "./pages/user-list/UserList";
import { SingleUser } from "./pages/single-user/SingleUser";
import { NewUser } from "./pages/new-user/NewUser";

function App() {
  return (
    <>
      <Router className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/users">
              <UserList />
            </Route>
            <Route exact path="/user/:userId">
              <SingleUser />
            </Route>
            <Route exact path="/newUser">
              <NewUser />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
