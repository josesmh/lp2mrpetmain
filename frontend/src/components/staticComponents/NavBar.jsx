import { Link } from 'react-router-dom';

import LogoNavBar from "./LogoNavBar";
import LinkItem from "../elements/LinkItem";

import "./NavBar.scss";

const NavBar = () => {
	return (
		<nav className='NavBar'>
			<Link to="/" >
				<LogoNavBar></LogoNavBar>
			</Link>
			<ul>
				<LinkItem to="/" content="Home" customClass="NavBarMain"/>
				<LinkItem to="/contact" content="Contact" customClass="NavBarMain"/>
				<LinkItem to="/company" content="Company" customClass="NavBarMain"/>
				<LinkItem to="/new-project" content="New Project" customClass="NavBarMain"/>
			</ul>
		</nav>
	);
};

export default NavBar;
