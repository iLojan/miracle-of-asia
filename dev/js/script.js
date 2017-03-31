jQuery.noConflict();

(function($){

	'use strict';

	/*
	* document ready function
	*/
	$(function() {

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
		});

		$('.rating').each(function(){
			var val = $(this).data('value');

			if(val && val>=0 && val<=5){
				$(this).rateYo({
					rating: val,
					starWidth: '12px',
					ratedFill: '#518c3c',
					normalFill: "#dddddd",
					readOnly: true
				});
			}
		});

}(jQuery));