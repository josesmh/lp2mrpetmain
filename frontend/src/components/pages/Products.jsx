import { useState, useEffect } from 'react';
import CardsProducts from '../elements/CardsProducts';


import axios from "axios";

function Products () {
	const [ cardsProducts, setCardsProducts ] = useState( [] );

	useEffect( () => {
		const fetchData = async () => {
			try {
				const response = await axios.get( 'http://localhost:3001/products' );
				setCardsProducts( response.data );
				console.log( cardsProducts );
			} catch ( error ) {
				console.log( error.message); 
			}
		};

		fetchData();
	},[]);
	return (
		<section>
			<h1>Produtos</h1>
			 <ul>
			{cardsProducts.map( ( card ) => {
						return (
							<CardsProducts id={card.id} ></CardsProducts>
						);
					} )}
			</ul> 
		</section>
	);
}

export default Products;


{/* <main>
	<h1>Produtos</h1>
	<section class="form-create">
		<form action="/products" method="POST">
			<h2>Criar Produto</h2>
			<div>
				<label for="name">Name:</label>
				<input type="text" id="name" name="name" required>
			</div>
			<div>
				<label for="price">Price:</label>
				<input type="text" id="price" name="price" required>
			</div>
			<div>
				<label for="image">Image:</label>
				<input type="text" id="image" name="image">
			</div>
			<button type="submit">Criar</button>
		</form>
	</section>

	<section class="products">
		<h2>Produtos Registrados</h2>
		<table>
			<tr class="desc">
				<th>Número</th>
				<th>Imagem</th>
				<th>Item</th>
				<th>Preço</th>
				<th>Quem adicionou</th>
				<th>Editar</th>
				
				<th>Deletar</th>
			</tr>
			<% products.forEach(product=> { %>
				<tr class="item">
					<a href="/products/<%= product.id %>">
						<td>
							<%= product.id %>
						</td>
						<td>
							<div class="img">
								<img src="<%= product.image %>" alt="Not Found">
							</div>
						</td>
						<td>
							<%= product.name %>
						</td>
						<td>
							<%= product.price %>
						</td>
						<td>
							<%= product.creator.name %>
						  </td>
					</a>
					<td>
						<a href="/products/update/<%= product.id %>"><i class="fa-solid fa-pen-to-square"></i></a>
					</td>
					<td>
						<a href="/products/delete/<%= product.id %>"><i class="fa-solid fa-trash"></i></a>
					</td>
				</tr>
				<% }) %>
		</table>
	</section>
</main> */}
