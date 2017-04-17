jQuery.noConflict();

(function($){

	'use strict';

	/*
	* document ready function
	*/
	$(function() {

		var starColor = '#279257';

		$('.parallax-window').parallax();

		$('.slick').slick({
			  dots: false,
			  infinite: false,
			  speed: 300,
			  slidesToShow: 5,
			  slidesToScroll: 1,
			  responsive: [
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    }
			  ]
			});

			$("#ex2").slider({
				tooltip: 'always'
			});

			$("#ex3").slider({
				tooltip: 'always'
			});

			$('.rating').each(function(){
				var val = $(this).data('value');
				if(val && val>=0 && val<=5){
					$(this).rateYo({
						rating: val,
						starWidth: '12px',
						ratedFill: starColor,
						normalFill: "#dddddd",
						readOnly: true
					});
				}
			});

			$('.rating-lg').each(function(){
				var val = $(this).data('value');
				if(val && val>=0 && val<=5){
					$(this).rateYo({
						rating: val,
						starWidth: '24px',
						ratedFill: starColor,
						normalFill: "#dddddd",
						readOnly: true
					});
				}
			});

			$('input').iCheck({
				checkboxClass: 'icheckbox_square-green',
				radioClass: 'iradio_square-green'
			});

			$('.filter-toggle').on('click', function(){
				$('.filter-cont-wrap').toggleClass('hidden-xs');
			});

			$('#imageGallery').on('click', function(e){
				event = e || window.event;
			    var target = event.target || event.srcElement,
			        link = target.src ? target.parentNode : target,
			        options = {
			        	index: link, 
			        	event: event,
			        	continuous: false,
			        	toggleControlsOnSlideClick: false
			        },
			        links = this.getElementsByTagName('a');
			    blueimp.Gallery(links, options);
			});

		});		

}(jQuery));