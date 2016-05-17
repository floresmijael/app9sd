// JavaScript Document
$(document).ready(function(e){
//whatchID se refier a actual

var watchD=null;
document.addEventListener("devicerwady",dispocitivo_listo,false);

//cuando esta listo el dispósitivo
function Dispositivo_listo(){
comineza();
}

//empieza la observacion de la aceleracion
function comienza(){
	
//actualiza la aceleracion cada 2 segundos 
//
var opciones={frequency:2000};

watchID=navigator.accelerometer.watchAcceleration(Correcto,Error,opciones);
navigator.geolocation.getCurrentPosition(Locliza,ErrorLocalizacion);
}
//detiene la observacion de la aceleracion

function detente(){
if(watchID){
navigator .accelerometer.clearWatch (watchID);
watchID=null;
}
}
//correcto tomo una captura de la aceleracion
function correcto(acceleration){
var elemnt=document.getElementById('acelerometro');

element.innerHTML='Aceleracion en X:'+acceleration.x+'<br/>'+
'Aceleracion en Y:'+acceleration.y+'<br/>'+
'intervalo:'+acceleration.timestamp+'<br/>';
}

//eRROR:FALLA al obtebner la celeracion
function Error(){
alert('Error!');
}
//exito al localizar
function localiza(posicion){
var element=document.getElementById('geolocalocalizacion');
element.innerHTML='Latitud:'+posicion.coords.longitude+'<br/>'+
'Longitud:'+posicion.coords.longitude+'<br/>'+
'Precision:'+posicion.coords.longitude+'<br/>'+
'Intervalo:'+posicion.coords.longitude+'<br/>';
}
//Error en la geolocalizacion
function Errorlocalizacion(error){
alert('codigo:'+error.code+'\n'+
'mensaje:'+error.message+'\n');
}
});//document ready
