let ventaMen = 0;
let ventaMed = 0;
let ventaSup = 0;
let canMen = 0;
let canMed = 0;
let canSup = 0;
let ventaTotal = 0;

function sumaVentas(precio){
    precio <= 500?
        (ventaMen += precio, canMen ++):
            precio <= 1000 && precio > 500?
                (ventaMed += precio, canMed ++ ):
                ( ventaSup += precio, canSup ++ );
    ventaTotal = ventaMen + ventaMed + ventaSup;
}

addEventListener("DOMContentLoaded", (e) => {
    document.querySelector("#cantidad").removeAttribute("disabled");
    document.querySelector("#cantidad").addEventListener("keyup", (e) => {
        let Precio = document.querySelector("#precio");
        if (e.target.value > 0) {
            Precio.removeAttribute("disabled");
        } else {
            Precio.disabled = true;
        }
    })
    let con = 1;
    let myform = document.querySelector("#form");
    myform.addEventListener("submit", async (e) => {
        e.preventDefault();
        let cantidad = document.querySelector("#cantidad").value;
        let Precio = parseInt( document.querySelector("#precio").value);
        document.querySelector("#cantidad").disabled = true;
        if (con < cantidad) {
            document.querySelector("#precio").value = "";
            con += 1;
            sumaVentas(Precio);
        } else {
            document.querySelector("#resultado").innerHTML = "";
            sumaVentas(Precio);
            document.querySelector("#resultado").insertAdjacentHTML
                ("beforeend",`La cantidad de ventas superiores a 1000 es: ${canSup} y su Total respectivo sera: ${ventaSup} `+
                `La cantidad de ventas superiores a 500 y menores a 1000 son ${canMed} y su monto respectivo es ${ventaMed} `+
                `La cantidad de ventas menores a 500 son ${canMen} y su monto respectivo es ${ventaMen} `+
                `La venta total es de ${ventaTotal}`);
        }
    })
})