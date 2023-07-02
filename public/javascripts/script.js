function getProductView(product) {
  return `<li class="product-item">
    <div class="product-box-image">
      <a href="index.html"><img
        src="${product.image}"
        class="product-image"
      /></a>
    </div>
    <p class="product-name">${product.name}</p>
    <div class="product-price">
    <p class="product-cost">
        <span class="actual-price">${product.
        price}</span>
      </p>
    </div></li>`;
    
}

const response = await fetch('./data/products.js');
const data = await response.json();

let productsView = '';

for (const product of data.products) {
  productsView += getProductView(product);
}

productsView;

document.querySelector('ul.catalog').innerHTML = productsView;



function searchProducts(query) {
  const filteredProducts = data.products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  return filteredProducts;
}

function displayProducts(products) {
  const productsView = products.map(getProductView).join('');
  document.querySelector('ul.catalog').innerHTML = productsView;
}

//  DISPLAY THE PRODUCTS
displayProducts(data.products);

// ESCUTAR FORM E PROCURAR
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  const query = document.querySelector('#search-box').value;
  const filteredProducts = searchProducts(query);
  displayProducts(filteredProducts);
});


