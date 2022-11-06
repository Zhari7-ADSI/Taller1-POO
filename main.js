addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        let meses = document.querySelector("#meses").value;
        let dato = new Date(meses);
        let year,mes,dia;
        var Pago = 10;
        if (!!dato.valueOf()) {
            year = dato.getFullYear();
            mes = dato.getMonth() + 1;
            dia = dato.getDate() + 1;
        }

        let Semana = ['Domingo', 
        'Lunes', 
        'Martes',
        'Miércoles', 
        'Jueves', 
        'Viernes', 
        'Sábado'];
        
        let Mes = ['Enero', 
        'Febrero', 
        'Marzo', 
        'Abril', 
        'Mayo', 
        'Junio', 
        'Julio', 
        'Agosto', 
        'Septiembre', 
        'Octubre', 
        'Noviembre', 
        'Diciembre'];

        for(let i=0;i<20;i++){
            var indice = new Date(year, mes - 1, 16).getDay();
            document.querySelector("#res").insertAdjacentHTML("beforeend",(`${Semana[indice]} del ${dia} de ${Mes[new Date(year, mes - 1, dia).getMonth()]} del ${(new Date(year, mes - 1, dia).getMonth()==0) ?++year : year} debe pagar ${Pago}<br>`));
            Pago = Pago * 2;
            mes++;
        }
    })
})