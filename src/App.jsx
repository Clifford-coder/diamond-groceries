import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Navbar, Footer } from './components';
import { Cart, Landing, Store } from './pages';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Landing} />
					<Route path="/store" exact component={Store} />
					<Route path="/cart" exact component={Cart} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
