/*
 * Archivo principal de funcionalidad de JS
 */
 var modal= document.getElementById("modal");
 var imgEmergente=document.getElementById('imagen');
 var x=document.getElementById('x');
 var imagenes = document.getElementsByClassName("img");


for(var i=0; i<imagenes.length; i++){
	imagenes[i].addEventListener("click", prueba)
}
function prueba(){
	this.style.display="block";
	imgEmergente.src=this.src;
	this.style.width="1000px";
	this.style.align="center"
}