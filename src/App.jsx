import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Navbar, Footer } from './components';
import { Cart, Checkout, Contact, ItemDetails, Landing, Login, PageNotFound, SignUp, Store } from './pages';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Landing} />
					<Route path="/store" exact component={Store} />
					<Route path="/cart" exact component={Cart} />
					<Route path="/single" exact component={ItemDetails} />
					<Route path="/contact" exact component={Contact} />
					<Route path="/checkout" exact component={Checkout} />
					<Route path="/login" exact component={Login} />
					<Route path="/sign-up" exact component={SignUp} />
					<Route path="*" exact component={PageNotFound} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
