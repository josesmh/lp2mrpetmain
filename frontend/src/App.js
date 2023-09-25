import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/partials/Header/Header";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Appointments from "./components/pages/Appointments";
import Baths from "./components/pages/Baths";
import Footer from "./components/partials/Footer/Footer";

import Container from "./components/container/Container";

import NavBar from "./components/elements/NavBar"

import './App.css';

function App () {
	return (
		<Router>
			<Header></Header>
			<Container>
				<NavBar></NavBar>
				<Routes>
					<Route path="/" element={ <Home /> } />
					<Route path="/products" element={ <Products /> } />
					<Route path="/Appointments" element={ <Appointments /> } />
					<Route path="/baths" element={ <Baths /> } />
				</Routes>
			</Container>
			<Footer></Footer>
		</Router>


	);
}

export default App;
