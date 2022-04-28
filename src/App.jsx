import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { Navbar, Footer } from './components';
import { CartContextProvider } from './context';
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
  const location = useLocation();
  return (
    <>
      <CartContextProvider>
        {location.pathname !== '/' && <Navbar />}
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
        {location.pathname !== '/' && <Footer />}
        <ToastContainer />
      </CartContextProvider>
    </>
  );
}

export default App;
