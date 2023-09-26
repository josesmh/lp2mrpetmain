import React from 'react'
import LinkItem from './LinkItem'
import './Tabs.scss'

function Tabs() {
	return (
		<div className='Tabs'>
			<ul>
				<LinkItem to="/" content="Pagina Inicial" customClass="NavBarTabs"></LinkItem>
				<LinkItem to="/products" content="Produtos" customClass="NavBarTabs"></LinkItem>
				<LinkItem to="/Appointments" content="Consultas" customClass="NavBarTabs"></LinkItem>
				<LinkItem to="/baths" content="Banhos" customClass="NavBarTabs"></LinkItem>
			</ul>
		</div>
	)
}

export default Tabs