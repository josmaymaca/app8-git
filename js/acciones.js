// JavaScript Document

$(document).ready(function (e){
	document.addEventListener("deviceready",function(){
		$('#disp table td').eq(3).text(device.model);
		$('#disp table td').eq(5).text(device.cordova);
		$('#disp table td').eq(7).text(device.platform);
		$('#disp table td').eq(9).text(device.version);
		$('#disp table td').eq(11).text(device.uuid);
	document.addEventListener("pause",function(){
		escribehistoria ('la app se pausó');
	},false);//pause
	document.addEventListener("resume",function(){
		escribehistoria ('la app se reinició');
	},false);//resume
	document.addEventListener("online",function(){
		escribehistoria ('la app se conecto a la red');
	},false);//se conecto
	document.addEventListener("offline",function(){
		escribehistoria ('la app se desconecto de la red');
	},false);//se desconecto

	},false);//ready device

});//document

function escribehistoria(accion){
	$('#eHistoria').append('<li>'+accion+'</li>');
}

$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('#sonar').tap(function(){
			navigator.notification.beep(2);
		});//cierre del beep 
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(2000);
		});//cierre del vibrate 
	},false);//cierra el device ready
});//cierra el document ready


$(document).ready(function (e) {
	document.addEventListener("Deviceready",function(){
		
		$('#izquierda').on("swipeleft",function(){
			navigator.notification.alert("Deslizó a la izquierda",function(){"Aplicacion7","OK"});
		});
		$('#derecha').on("swiperight",function(){
			navigator.notification.confirm("¿Qué deseas hacer?",function(op){
				switch(op)
				{
					case 1:
					navigator.notification.beep(1);
					break;
					
					case 2:
					navigator.notification.vibrate(1500);
					break;
				}
			},"Aplicacion7","Sonar,Vibrar,Cancelar");	
		});
	},false);
});