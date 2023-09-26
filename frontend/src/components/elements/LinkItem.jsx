import React from 'react'
import {Link} from "react-router-dom"
import './LinkItem.scss'

function LinkItem({customClass, to, content}) {
	return (
		<li className={customClass}>
			<Link to={to}><span>{content}</span></Link>
		</li>
	)
}

export default LinkItem