const productos_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";

function cargarDatos(productos_URL){
    document.getElementById("data").innerHTML="";
    fetch(productos_URL)
        .then(respuesta => respuesta.json())
        .then(product => {
            let row ="";
            for(let i=0; i <product.length; i++){

                row = 
                <tr></tr>
                `
                <td>` + product[i].name + `</td>
                <td>` + product[i].description + `</td>
                <td>` + product[i].cost + `</td>
                <td>` + product[i].currency + `</td>
                <td>` + product[i].imgSrc + `</td>
                </tr>
                
                `;
                  document.getElementById("data").innerHTML += row;
    
            }
        })

    
}