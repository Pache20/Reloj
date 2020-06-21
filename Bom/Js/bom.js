//setTimeout: Ejecutar una funcion despues de transcurrido un tiempo en milisegundos

//window.setTimeout(saludar, 4000); //Solo se ejecuta una vez el setTimeout

function saludar(){
    alert("Hola comision 1-A")
}

let contador = 1;
let tiempo = window.setInterval(contar, 1000);//Se ejecuta repetidamente, si queremos que pare en determiando momento hay que definir un parametro sino se ejecuta indefinidamente.

function contar(){
    document.write(contador + "<br>");
    
    if(contador==10){
        window.clearInterval(tiempo);
    }
    contador++;
}