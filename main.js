let sumaA = 0, sumaB = 0, sumaC = 0, canA = 0, canB = 0, canC = 0;

function sumaPro(genero, carrera, edad) {
    if (genero == "M") {
        if (carrera == "a") {
            sumaA = sumaA + edad;
            canA += 1;
        } else if (carrera == "b") {
            sumaB = sumaB + edad;
            canB += 1;
        } else {
            sumaC = sumaC + edad;
            canC += 1;
        }
    } else {
        null
    }
}

addEventListener("DOMContentLoaded", (e) => {
    document.querySelector("#cant").removeAttribute("disabled");
    document.querySelector("#cant").addEventListener("keyup", (e) => {
        let genero = document.querySelector("#genero");
        let edad = document.querySelector("#edad");
        let carrera = document.querySelector("#carrera");
        if (e.target.value > 0) {
            genero.removeAttribute("disabled");
            edad.removeAttribute("disabled");
            carrera.removeAttribute("disabled");
        } else {
            genero.disabled = true;
            edad.disabled = true;
            carrera.disabled = true;
        }
    })

    let con = 1;
    let lista = [];
    let myform = document.querySelector("#form");
    myform.addEventListener("submit", async (e) => {
        e.preventDefault();

        let cantidad = document.querySelector("#cant").value;
        document.querySelector("#cant").disabled = true;
        if (con < cantidad) {
            let data = Object.fromEntries(new FormData(form));
            sumaPro(data["genero"], data["carrera"], parseInt(data["edad"]));
            document.querySelector("#genero").selectedIndex = 0;
            document.querySelector("#edad").value = "";
            document.querySelector("#carrera").selectedIndex = 0;
            con += 1;

        } else {
            let form = e.target;
            let data = Object.fromEntries(new FormData(form));
            sumaPro(data["genero"], data["carrera"], parseInt(data["edad"]));
            document.querySelector("#resultado").innerHTML = "";
            lista.push(sumaA);
            lista.push(canA);
            lista.push(sumaB);
            lista.push(canB);
            lista.push(sumaC);
            lista.push(canC);

            let config = {
                method: form.method,
                body: JSON.stringify(lista)
            };

            let peticion = await fetch(form.action, config);
            let respuesta = await peticion.text();
            document.querySelector("#resultado").insertAdjacentHTML("beforeend", respuesta);
            document.querySelector("#genero").selectedIndex = 0;
            document.querySelector("#edad").value = "";
            document.querySelector("#carrera").selectedIndex = 0;
            genero.disabled = true;
            edad.disabled = true;
            carrera.disabled = true;
        }
    })
})