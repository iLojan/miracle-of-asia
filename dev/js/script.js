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
						ratedFill: '#518c3c',
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
						ratedFill: '#518c3c',
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

		});

		

}(jQuery));