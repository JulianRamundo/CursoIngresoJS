/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."
------------------------------------------------------------------
Alumno: Julian Ramundo DIV Z 
Ejer. 08 E/S 
*/


function SacarResto()
{

	var dividendo;
	var divisor;



	dividendo= document.getElementById("txtIdNumeroDividendo").value;  
	dividendo= parseInt (dividendo);
	
	divisor= document.getElementById("txtIdNumeroDivisor").value;
	divisor= parseInt(divisor);

	alert("el resto es : " + dividendo % divisor);
}
