import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import { Navbar, Footer } from './components';
import {
	// Cart,
	// Checkout,
	// Contact,
	// ItemDetails,
	// Landing,
	// Login,
	// PageNotFound,
	// SignUp,
	SiteComingOutSoon,
	// Store,
} from './pages';

function App() {
	return (
		<>
			<BrowserRouter>
				{/* <Navbar /> */}
				<Switch>
					<Route path="/" exact component={SiteComingOutSoon} />
					<Route path="/landing" exact component={SiteComingOutSoon} />
					<Route path="/store" exact component={SiteComingOutSoon} />
					<Route path="/cart" exact component={SiteComingOutSoon} />
					<Route path="/single" exact component={SiteComingOutSoon} />
					<Route path="/contact" exact component={SiteComingOutSoon} />
					<Route path="/checkout" exact component={SiteComingOutSoon} />
					<Route path="/login" exact component={SiteComingOutSoon} />
					<Route path="/sign-up" exact component={SiteComingOutSoon} />
					<Route path="*" exact component={SiteComingOutSoon} />
				</Switch>
				{/* <Footer /> */}
			</BrowserRouter>
		</>
	);
}

export default App;
