import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navbar } from './components';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
			</BrowserRouter>
		</>
	);
}

export default App;
