$(".cart__item-list").hide();

$(document).ready(function() {

	$(".menu__cart-wrap").click(function(e) {
	    e.preventDefault();
	    $(".cart__item-list").toggle();
	});

});