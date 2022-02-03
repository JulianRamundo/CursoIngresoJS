/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
Alumno: Julian Ramundo DIV Z 
Ejer. 04 E/S 

*/
function mostrar()
{
	
	var nombreIngresado;

	nombreIngresado = prompt("Ingrese su nombre");

	document.getElementById("txtIdNombre").value = nombreIngresado;
	


	alert("ok");
}

