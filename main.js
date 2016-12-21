var puntosSquad = document.getElementById("puntosSquad");
var puntosMaximo = document.getElementById("puntosMaximo");
var divSalida = document.getElementById("salida");
var resultado = (puntosSquad/maxPuntos);
var porcentaje =(resultado *100);



function alcanzoPromedio(puntosSquad, maxPuntos) {
	var valorResultado = resultado.value;
	var valorPorcentaje = porcentaje.value;
    
        if (porcentaje >=80){
            porcentaje = "Muy bien squad!";
            return porcentaje;
            	//Si no es verdad hace esto
			salida.innerHTML = "0.00";
			document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger">No se ingresaron valores</div>';

        }else{
            porcentaje = "Pueden hacerlo mejor.";
            return porcentaje;
        }            
}

	