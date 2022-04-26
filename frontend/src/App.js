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
import { SingleProduct } from "./pages/single-product/SingleProduct";
import { NewProduct } from "./pages/new-product/NewProduct";
import { Login } from "./pages/login/Login";
import { useSelector } from "react-redux";
import { EnterEmail } from "./pages/pass-reset/EnterEmail";
import { UpdatePass } from "./pages/pass-reset/UpdatePass";
import Categories from "./pages/new-category/Categories";
import Analysis from "./pages/analysis/Analysis";
import TransactionPage from "./pages/transactionPage/TransactionPage";

function App() {
  const { isAuth } = useSelector((state) => state.login);
  return (
    <>
      <Router>
        <Switch>
          {/* <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/enter-email">
            <EnterEmail />
          </Route>
          <Route exact path="/update-password">
            <UpdatePass />
          </Route>
          {isAuth && ( */}
          <>
            <Topbar />
            <div className="container">
              <Sidebar />

              <Route exact path="/home">
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
              <Route exact path="/newProduct">
                <NewProduct />
              </Route>
              <Route exact path="/newCategory">
                <Categories />
              </Route>
              <Route exact path="/analysis">
                <Analysis />
              </Route>
              <Route exact path="/products">
                <ProductList />
              </Route>

              <Route exact path="/product/:id">
                <SingleProduct />
              </Route>
              <Route exact path="/transaction">
                <TransactionPage />
              </Route>
            </div>
          </>
          {/* )} */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
