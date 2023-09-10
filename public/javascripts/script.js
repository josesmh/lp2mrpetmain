let catalog = document.querySelector("#catalog");
    fetch("/products").then((response) => {
      response.json().then((data) => {
        data.map((product) => {
          catalog.innerHTML += 
          `<li class="product-item">
            <div class="product-box-image">
              <a href="index.html"><img src="${product.image}" class="product-image" /></a>
            </div>
            <p class="product-name">${product.name}</p>
            <div class="product-price">
              <p class="product-cost">
                <span class="actual-price">${product.price}</span>
              </p>
            </div>
          </li>`;
        });
      });
    }); 

   