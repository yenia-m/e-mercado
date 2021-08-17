const productos_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";

function cargarDatos(productos_URL){
    document.getElementById("data").innerHTML="";
    fetch(productos_URL)
        .then(respuesta => respuesta.json())
        .then(product => {
            let row ="";
            for(let i=0; i <product.length; i++){

                row = 
                `
                <li>` + product[i].name + `</li>
                <li>` + product[i].description + `</li>
                <li>` + product[i].cost + `</li>
                <li>` + product[i].currency + `</li>
                <li>` + product[i].imgSrc + `</li>
                
                
                `;
                  document.getElementById("data").innerHTML += row;
    
            }
        })

    
}