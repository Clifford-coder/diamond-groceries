import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Navbar, Footer } from './components';
import {
  Cart,
  Checkout,
  Contact,
  ItemDetails,
  Landing,
  Login,
  PageNotFound,
  SignUp,
  SiteComingOutSoon,
  Store,
} from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={SiteComingOutSoon} />
          <Route path="/landing" exact component={Landing} />
          <Route path="/store" exact component={Store} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/store/:id" exact component={ItemDetails} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/login" exact component={Login} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="*" exact component={PageNotFound} />
        </Switch>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
