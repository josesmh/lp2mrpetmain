import React from 'react'
import ItemList from './ItemList'

function NavBar() {
	return (
		<div>
			<ul>
				<ItemList to="/" content="Pagina Inicial"></ItemList>
				<ItemList to="/products" content="Produtos"></ItemList>
				<ItemList to="/Appointments" content="Consultas"></ItemList>
				<ItemList to="/baths" content="Banhos"></ItemList>
			</ul>
		</div>
	)
}

export default NavBar