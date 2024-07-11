/*CONTADOR DE PERSONAS
*Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos datos y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas.
*Se tienen las siguientes personas: Luis, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:

*Cantidad de personas: 10
*Cantidad de hombres: 6
Cantidad de mujeres: 4
*/

import CL_cantidad from './CL_cantidad.js';
import CL_personas from './CL_personas.js';

//instaciar al objeto Personas
let personas1 = new CL_personas ("Luisa", "F");
let personas2 = new CL_personas ("Ana", "F");
let personas3 = new CL_personas ("José", "M");
let personas4 = new CL_personas ("Carmen", "F");
let personas5 = new CL_personas ("Rosa", "F");
let personas6 = new CL_personas ("José", "M");
let personas7 = new CL_personas ("María,", "F");
let personas8 = new CL_personas ("Luz", "F");
let personas9 = new CL_personas ("Rafael", "M");
let personas10 = new CL_personas ("Liz", "F");
let personas11 = new CL_personas ("Marcos", "M");
let personas12 = new CL_personas ("Leo", "M");

// instaciar el procesar
let cantidad = new CL_cantidad ();
cantidad.procesarpersonas (personas1);
cantidad.procesarpersonas (personas2);
cantidad.procesarpersonas (personas3);
cantidad.procesarpersonas (personas4);
cantidad.procesarpersonas (personas5);
cantidad.procesarpersonas (personas6);
cantidad.procesarpersonas (personas7);
cantidad.procesarpersonas (personas8);
cantidad.procesarpersonas (personas9);
cantidad.procesarpersonas (personas10);
cantidad.procesarpersonas (personas11);
cantidad.procesarpersonas (personas12);

//Salida solicitada

let salida = document.getElementById ("salida");

salida.innerHTML+= " <br> Cantidad de personas: "+cantidad.cantpersonas();
salida.innerHTML+= " <br> Cantidad de hombres: " +cantidad.mostrarHombres();
salida.innerHTML+= "<br> Cantidad de mujeres: " +cantidad.mostrarMujeres();

