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
	imgEmergente.src=this.src;
	modal.style.display="block";
}
function cerrar(){
	modal.style.display="none";
}

x.addEventListener("click", cerrar)
