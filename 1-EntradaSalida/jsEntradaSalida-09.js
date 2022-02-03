/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
-------------------------------------------------
Alumno: Julian Ramundo DIV Z
Ejer. 09 E/S 
*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	var porcentaje ;

	porcentaje = 10; // AHORA FUNCIONA !! 

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo= parseInt(sueldo);
	
	resultado = sueldo + (sueldo / 100*porcentaje);


	 document.getElementById("txtIdResultado").value = resultado ;
	

	//alert(resultado);
}
