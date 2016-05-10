$(document).ready(function(){
    $("a").click(function(){
    	$("body, html").animate({
    		scrollTop: $( $(this).attr('href') ).offset().top-50},600);
    	});
});
