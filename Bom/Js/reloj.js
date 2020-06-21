function obtenerHora(){
    //Con Date obtengo la hora y la fecha del sistema del cliente, con new creamos un objeto de mi clase, creamos un nuevo objeto de tipo fecha
    let fecha = new Date();
    //console.log(fecha); con esto vemos que nos trae la variable fecha
    //console.log(fecha.getDate()); el numero del dia, se colocan parenteis porque son metodos
    //console.log(fecha.getFullYear()); vemos el año
    //console.log(fecha.getDay()); obtenemos el dia de la semana en valor numerico(dia 0 es domingo)
    //console.log(fecha.getMonth()); vemos el mes

    //declarar variables
    let pDiaSemana = document.getElementById(`diaSemana`),
    pDia = document.getElementById(`dia`),
    pYear = document.getElementById(`year`),
    pMes = document.getElementById(`mes`),
    pHoras = document.getElementById(`horas`),
    pMinutos = document.getElementById(`minutos`),
    pSegundos = document.getElementById(`segundos`),
    pAmPm = document.getElementById(`ampm`);

    let dias =["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let meses =["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    pDiaSemana.innerText = dias[fecha.getDay()]; //para acceder a una propiedad texto de un objeto traido de html usamos innerText
    pMes.innerText = meses[fecha.getMonth()]; 
    pDia.innerText = fecha.getDate();
    pYear.innerText = fecha.getFullYear();

    pHoras.innerText = fecha.getHours();
    pMinutos.innerText = fecha.getMinutes();
    pSegundos.innerText = fecha.getSeconds();

    if(fecha.getHours() >=12){
        pHoras.innerText = "0" + (fecha.getHours() -12);
    }

    if(fecha.getMinutes() <10){
        pMinutos.innerText = "0"+fecha.getMinutes();
    }else{
        pMinutos.innerText = fecha.getMinutes();
    }

    if(fecha.getSeconds() <10){
        pSegundos.innerText = "0"+fecha.getSeconds();
    }else{
        pSegundos.innerText = fecha.getSeconds();
    }

    if(fecha.getHours() >=12){
        pAmPm.innerText = "PM";
    }else{
        pAmPm.innerText = "AM";
    }

}

window.setInterval(obtenerHora,1000);