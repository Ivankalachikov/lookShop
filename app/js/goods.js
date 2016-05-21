$.loadGoods=function(){
	var ww=$(window).width();
	if (ww>768) {
		$('.goods__items').empty();
		$('.clearance__items').empty();
		$('.goods__items').load('../goods.html');
		$('.clearance__items').load('../clearance.html'); 
		$(".goods__nav-list").show();
	}
	else {

		if ( $(".goods__items").hasClass("slick-initialized") ) {
			$('.goods__items').slick('unslick');
		}
		else{
			$('.goods__items').slick({
					infinite: true,
					slidesToShow: 3,
					slidesToScroll: 1,
					appendArrows: $('.goods__controls'),
					nextArrow: $('.goods__control--next'),
					prevArrow: $('.goods__control--prev'),
				});
		}
		if ( $(".clearance__items").hasClass("slick-initialized") ) {
			$('.clearance__items').slick('unslick');
		}
	}
}


$(window).resize(function() {
		$.loadGoods();
});

$.loadGoods();



$('.goods__load-more').click(function (){ 
	
   $('.goods__container-more').load('../goods.html');
   $('.goods__load-more').hide("slow");

});


$('.clearance__load-more').click(function (){ 
  $('.clearance__container-more').load('../clearance.html');
  $('.clearance__load-more').hide("slow");
});

///Навигация

$(document).ready(function() {

	$(".goods__nav-select").click(function(e) {
	    e.preventDefault();
	    $(".goods__nav-list").toggle("slow");
	});

	$(".goods__nav-item-link").click(function(e) {
		if ($(window).width()<768){
	    e.preventDefault();
	    $(".goods__nav-select").html($(this).html()+'<i class="goods__nav-select-btn icon-caret-down"></i>');
	    $(".goods__nav-list").toggle("slow");
	  }
	  else{
	  	return;
	  }
	});

});
