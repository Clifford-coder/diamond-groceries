import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Navbar, Footer } from './components';
import { Landing } from './pages';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Route path="/" exact component={Landing} />
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
