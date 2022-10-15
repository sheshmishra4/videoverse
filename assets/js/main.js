$(function() {


	$('ul.toggle').click(function(){
		$(this).toggleClass('active');
		$('body').toggleClass('disabled');
		$('.left-nav').toggleClass('active');
	});
	
	document.getElementById("year").innerHTML = new Date().getFullYear();   

    var owl = $(".big-slider");
		owl.owlCarousel({
		items: 1,
		margin:20,
		loop: true,
		nav: true,
		dots:true,
		autoplay:true,
  	});
	var owl = $(".bottom-carousel");
	  	owl.owlCarousel({
		items: 1.4,
		margin: 10,
		loop: true,
		nav: true,
		dots:false,		
	});

});