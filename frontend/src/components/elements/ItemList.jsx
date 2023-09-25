import React from 'react'
import {Link} from "react-router-dom"

function ItemList({to, content}) {
	return (
		<li>
			<Link to={to}>{content}</Link>
		</li>
	)
}

export default ItemList