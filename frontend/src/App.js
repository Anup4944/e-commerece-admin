import React from "react";
import { Sidebar } from "./component/sidebar/Sidebar";
import { Topbar } from "./component/topbar/Topbar";
import "./app.css";
import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserList } from "./pages/user-list/UserList";
import { SingleUser } from "./pages/single-user/SingleUser";
import { NewUser } from "./pages/new-user/NewUser";
import { ProductList } from "./pages/product-list/ProductList";
import { Product } from "./pages/product/Product";
import { NewProduct } from "./pages/new-product/NewProduct";
import { Login } from "./pages/login/Login";
import { useSelector, useDispatch } from "react-redux";
import { PrivateRoute } from "./pages/private-route/PrivateRoute";

function App() {
  const { isAuth } = useSelector((state) => state.login);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <div>
            <Topbar />
            <div className="container">
              <Sidebar />

              <PrivateRoute exact path="/home">
                <Home />
              </PrivateRoute>

              <PrivateRoute exact path="/users">
                <UserList />
              </PrivateRoute>
              <PrivateRoute exact path="/user/:userId">
                <SingleUser />
              </PrivateRoute>
              <PrivateRoute exact path="/newUser">
                <NewUser />
              </PrivateRoute>
              <PrivateRoute exact path="/products">
                <ProductList />
              </PrivateRoute>
              <PrivateRoute exact path="/newProduct">
                <NewProduct />
              </PrivateRoute>
              <PrivateRoute exact path="/product/:productId">
                <Product />
              </PrivateRoute>
            </div>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
