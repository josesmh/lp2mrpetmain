import API from './lib/auth.js';

let catalog = document.querySelector("#catalog");
    fetch("/products").then((response) => {
      response.json().then((data) => {
        data.map((product) => {
          catalog.innerHTML += 
          `<li class="product-item">
            <div class="product-box-image">
              <a href="index.ejs"><img src="${product.image}" class="product-image" /></a>
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

 
    window.onload = function() {
      var token = localStorage.getItem('token');
    
      var accountButton = document.getElementById('accountmsg3');
      var loginButton = document.getElementById('accountmsg4');
      var registerButton = document.getElementById('accountmsg2');
      var manageButton = document.getElementById('accountmsg1');
    
      if (token) {
        // User is authenticated
        loginButton.style.display = 'none';
        registerButton.style.display = 'none';
      } else {
        // User is not authenticated
        accountButton.style.display = 'none';
        manageButton.style.display = 'none';
      }
    }


    async function loadCcount(){
      const token = API.getToken();
      fetch(`/my-account`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the response body as JSON
      })
      .then(data => {
        // Handle the successful response data here
        console.log('Response data:', data);
      })
    }
    if (API.isAuthenticated()) {
      loadCcount();
    
    }
      
    
     