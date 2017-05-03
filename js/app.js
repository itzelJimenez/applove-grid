/*
 * Archivo principal de funcionalidad de JS
 */
var imagenes = document.getElementsByClassName("img");
for(var i=0; i<imagenes.length; i++){
	imagenes[i].addEventListener("click", prueba)
}
function prueba(){
	alert("Te necesito!!!!!!")
}