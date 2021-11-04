import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import MyOrders from "./Components/MyOrders/MyOrders";
import ManageAllServices from "./Components/ManageAllServices/ManageAllServices";
import AddNewService from "./Components/AddNewService/AddNewService";
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

                <PrivateRoute path="/services/:id">
                  <BookingService></BookingService>
                </PrivateRoute>

                <PrivateRoute path="/myorders">
                  <MyOrders></MyOrders>
                </PrivateRoute>

                <PrivateRoute path="/manageorders">
                  <ManageAllServices></ManageAllServices>
                </PrivateRoute>

                <PrivateRoute path="/addnewservice">
                  <AddNewService></AddNewService>
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
