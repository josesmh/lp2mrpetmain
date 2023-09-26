import React from 'react';
import './LogoNavBar.scss';
import logoImg from '../assets/Logo.jpg';

const Index = () => {
	return (
		<div className="logo">
			<img src={logoImg} alt="ir para o inicio" className="logo" />
			<h1>Mr. Pet</h1>
		</div>
	);
};

export default Index;
