// JavaScript Document
$(document).ready(function(){
	(function(){		
		var myAudio=new Audio();
			myAudio.setAttribute('src','songs/song1.mp3');		
			myAudio.volume=0.5;	
				
		$('#playBtn').click(function(){
			if(myAudio.paused==true){
				myAudio.play();
				$(this).removeClass('play').addClass('pause');
			}	
			else{
				myAudio.pause();
				$(this).removeClass('pause').addClass('play');
			}
			});							
		
		myAudio.addEventListener('timeupdate',function(){
			var total=parseInt(myAudio.duration);
			var ct=parseInt(myAudio.currentTime);
			$("#progress").slider("option",{max:total,value:ct});
			},false);

		$("#progress").slider({
			 orientation: "horizontal",
			 range: "min",
			 max: 100,
			 value: 0,
			 animate:true,
			 slide:function(event,ui){
					myAudio.pause();
					myAudio.currentTime=ui.value;
					},
			 stop:function(event,ui){
					myAudio.play();			 
					}							
		});	
				
		$("#volume").slider({
			 orientation: "vertical",
			 range: "min",
			 max: 100,
			 value: 50,
			 animate:true,
			 slide:function(event,ui){
				var clsName=$("#volumeIco").attr("class");
					if(ui.value<50&&ui.value>0){
						$("#volumeIco").removeClass(clsName).addClass('volumeDown');
						}
					if(ui.value>50){
						$("#volumeIco").removeClass(clsName).addClass('volumeUp');
						}	
					if(ui.value==0){
						$("#volumeIco").removeClass(clsName).addClass('volumeOff');
						}	
					},
			 stop:function(event,ui){
					myAudio.volume=ui.value/100;			 
					 }							
		});
		
		})();

});