const url = "https://japceibal.github.io/emercado-api/cats_products/101.json";

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("");
    fetch(url)
    .then(response => response.json())
    .then(data => {  
    let response = 
    `<!-- Diseño de categorias desde acá -->
      <!-- titulos -->
      <div class="container">
        <div class="row mb-0 text-center">
          <div class="col-3"><p class="text-center">${data.catName}</p></div>
          <div class="col-5"></div>
          <div class="col unidades">Vendidos</div>
          <div class="col price">Precio</div>
        </div>
      </div>
    <hr class="mt-0"></hr>
    `;

    for (let i= 0 ;i < data.products.length; i++){
        response+= ` 
        <!-- Productos -->
        <div class="container">
          <div class="row mb-3 text-center fila">
            <!--imagen-->
            <div class="col">
              <img src="${data.products[i].image}" class="productImg rounded float-start" alt="...">
            </div>
            <!--Nombre y descripcion-->
            <div class="col-md-5 d-flex flex-column justify-content-center text-start info">
              <p class="fs-2">${data.products[i].name}</p>
              <p class="descripcion">${data.products[i].description}</p>
            </div>
            <!--Unidades vendidas-->
            <div class="col d-flex flex-column justify-content-center unidades">
              <p class="fs-6 unidades">${data.products[i].soldCount}</p>
            </div>
            <!--Precio-->
            <div class="col d-flex flex-column justify-content-center precio">
              <p class="fs-5">$${data.products[i].cost}${data.products[i].currency}</p>
            </div>
          </div>
        </div>
        `;
    }

    let content = document.getElementById("showProducts");
    content.innerHTML +=response;
  });
  });








