/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"
-----------------------------------------------------
Alumno: Julian Ramundo DIV Z 
Ejer. E/S   nro 06 
*/

function sumar()
{
	var numero1 ;
	var numero2 ; 
	var resultado ; 
	 
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);

	resultado = numero1 + numero2 ; 


	alert("la suma es:" + resultado);

}

