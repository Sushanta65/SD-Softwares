import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import AddServices from './components/Dashboard/AddServices/AddServices';
import WriteReview from './components/Dashboard/WriteReview/WriteReview';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import OrderList from './components/Dashboard/OrderList/OrderList';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceCheckOut from './components/ServiceCheckOut/ServiceCheckOut';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import MyOrders from './components/Dashboard/MyOrders/MyOrders';
import Error404 from './components/Error404/Error404';

export const UserContext = createContext()

function App() {
  const [logedInUser, setLogedInUser] = useState({})
  
  return (
    <UserContext.Provider value={[logedInUser, setLogedInUser]}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/addServices">
          <AddServices></AddServices>
        </PrivateRoute>
        <PrivateRoute path="/writeReview">
          <WriteReview></WriteReview>
        </PrivateRoute>
        <PrivateRoute path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </PrivateRoute>
        <PrivateRoute path="/orderList">
          <OrderList></OrderList>
        </PrivateRoute>
        <PrivateRoute path="/myOrders">
          <MyOrders></MyOrders>
        </PrivateRoute>
        <PrivateRoute path="/services/:id">
          <ServiceCheckOut></ServiceCheckOut>
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/checkOut/services/:id">
          <PlaceOrder></PlaceOrder>
        </Route>
        <Route path="*">
          <Error404></Error404>
        </Route>
      </Switch>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
