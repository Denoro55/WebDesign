$(document).ready(function(){

	$('.nav__item').on('click',function(e){
		e.preventDefault();
		var $this = $(this);
		$this.addClass('active');
		$this.siblings().removeClass('active');
	})


	$('.regular').slick({
		slidesToShow: 3,
		infinite: true,
		slidesToScroll: 3,
		centerPadding: '50px',
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});

	$('.button').on('click',function(e){
		var $this = $(this),
		$item = $this.closest('.bg__list-item');
		$('.regular').slick('slickNext');
		$item
		.addClass('btn-active')
		.siblings().removeClass('btn-active');
	})

	$("form__search").on("submit", function(){
		 FindOnPage('form__search');
	})

})