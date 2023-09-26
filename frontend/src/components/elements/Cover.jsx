import React from 'react'
import './Cover.scss'

function Cover() {
	return (
		<section className="Cover">
			<div className="containerImg"><div className="img"></div></div>
			<div className="gradient"></div>
			<div className="container">
				<h2 className='preTitle'>Bem vindo ao</h2>
				<h1 className="title">Mr. Pet</h1>
				<h2 className="subtitle">Sistema de Gerenciamento de Produtos</h2>
			</div>
		</section>
	)
}

export default Cover