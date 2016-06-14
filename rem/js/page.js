$(document).ready(function($) {

 	$('.sub_nav').on('tap', function(){
        $('.sub_con').removeClass('slideOutLeft');
        $('.sub_conBox').show();
        $('.sub_con').show();
        });
 	$('.sub_conBox').on('tap', function(event){
      	$('.sub_con').addClass('slideOutLeft');
      	$(this).hide();
        event.stopPropagation();
        });
  $('.sub_con').on('tap', function(event){
        event.stopPropagation();
        return false;
        });

});





