/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
--------------------------------------------------------------------------
Julian Ramundo DIV Z 
Ejer. 03 E/S 
*/


function mostrar()
{
	var nombreIngresado;
	//nombreIngresado = txtIdNombre.value;
	nombreIngresado = document.getElementById("txtIdNombre").value;  
	alert(nombreIngresado);

}


