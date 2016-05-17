// JavaScript Document
$(document). ready(function (e){
	//watchID se refiere a actual
	
	var watchID=null;
	document.addEventListener("deviceready",Dispositivo_Listo,false);
	
	//cuando esta listo el dispositivo
	function Dispositivo_Listo(){
		comienza();
	}
	
	//Empieza la observacion de la aceleracion 
	function Comienza(){
		
		//Actualiza la aceleracion cada 2 segundos 
		//
		var opciones={frequency:2000};
		
		watchID=navigator.accelerometer.watchAcceleration(correcto, Error, opciones);
		navigator.geolocation.getCurrentPosition(Localiza,ErrorLocalizacion);
	}
	//detiene la observacion de la aceleracion
	
	function Detener(){
		if(watchID){
			navigator.accelerometer.clearWatch (watchID);
			watchID=null;
		}
	}
	//correcto:Toma una captura de la aceleracion
	function Correcto(acceleration){
		var element=document.getElementById('acelerometro');
		
		element.innerHTML='Aceleracion en X:'+acceleration.x+'<br />'+
		'Aceleracion en Y:'+acceleration.y+'<br />'+
		'Intervalo:'+acceleration.timestamp+'<br />';
	}
	
	//eRROR:FALLA  al optener la aceleracion
	function Error(){
		alert('Error!');
	}
	//Exito al localizar
	function Localiza(posicion){
		var element=document.getElementById('geolocalizacion');
		element.innerHTML='Latitud:'+posicion.coords.latitude+'<br />'+
		'Longitud:'+posicion.coords.longitude+'<br />'+
		'Precision:'+posicion.coords.accuracy+'<br />'+
		'Intervalo:'+posicion.coords.timestamp+'<br />';
	}
	//error en la geolocalizacion
	function ErrorLocalizacion(error){
		alert('codigo:'+error.code+'\n'+
		'mensaje:'+error.message+'n');
	}
});//document ready 
	

