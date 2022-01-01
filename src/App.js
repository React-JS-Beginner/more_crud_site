import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import MyOrders from "./Components/MyOrders/MyOrders";
import ManageAllOrders from "./Components/ManageAllOrders/ManageAllOrders";
import AddNewPackage from "./Components/AddNewPackage/AddNewPackage";
import SignIn from "./Components/SignIn/SignIn";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import BookingService from "./Components/BookingService/BookingService";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <AuthProvider>
        <div className="page-container">
          <div className="content-wrap">
            <BrowserRouter>
              <Header></Header>
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route path="/home">
                  <Home></Home>
                </Route>
                <Route path="/dashboard">
                  <Dashboard></Dashboard>
                </Route>

                <PrivateRoute path="/services/:id">
                  <BookingService></BookingService>
                </PrivateRoute>

                <PrivateRoute path="/myorders">
                  <MyOrders></MyOrders>
                </PrivateRoute>

                <PrivateRoute path="/manageorders">
                  <ManageAllOrders></ManageAllOrders>
                </PrivateRoute>

                <PrivateRoute path="/addnewpackage">
                  <AddNewPackage></AddNewPackage>
                </PrivateRoute>

                <Route path="/signin">
                  <SignIn></SignIn>
                </Route>
              </Switch>
            </BrowserRouter>
          </div>
          <Footer></Footer>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
