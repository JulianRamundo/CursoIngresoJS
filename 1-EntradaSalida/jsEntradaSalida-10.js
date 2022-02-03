/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
------------------------------------------------------------
Alumno: Julian Ramundo DIV Z 
Ejer. 10 E/S 
*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var porcentaje ;

	porcentaje = 25; 

	importe = document.getElementById("txtIdImporte").value;
	importe= parseInt(importe);
	
	resultado = importe - (importe / 100*porcentaje);


	 document.getElementById("txtIdResultado").value = resultado ;
	





//	alert("ok");
}
