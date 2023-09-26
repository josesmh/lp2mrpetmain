import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/staticComponents/Header";
import Cover from "./components/elements/Cover";
import Tab from "./components/elements/Tabs"

// import Home from "./components/pages/Home";
// import Products from "./components/pages/Products";
// import Appointments from "./components/pages/Appointments";
// import Baths from "./components/pages/Baths";

import Footer from "./components/staticComponents/Footer";

import Container from "./components/container/Container";


import './App.css';

function App () {
	return (
		<Router>
			<Header></Header>
			<Cover></Cover>
			<Container>
				<Tab></Tab>
				{/* <Routes> */}
					{/* <Route path="/" element={ <Home /> } /> */}
					{/* <Route path="/products" element={ <Products /> } /> */}
					{/* <Route path="/Appointments" element={ <Appointments /> } /> */}
					{/* <Route path="/baths" element={ <Baths /> } /> */}
				{/* </Routes> */}
			</Container>
			<Footer></Footer>
		</Router>


	);
}

export default App;
