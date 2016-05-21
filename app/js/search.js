$(".top-line__search-input").hide();

// page_w = $(document).width();

// $(window).resize(function(){
//   var page_w = $(window).width();
// });

$(".top-line__search-wrap").click(function() {
		page_w = $(document).width();
        $(".top-line__search-input").toggle("slow");
        if (page_w<768){
        	$(".user-block__account").toggle("slow");
        };
        return false;
});

$(function(){
  $(document).click(function(event) {
  	page_w = $(document).width();
    if ($(event.target).closest(".top-line__search-input").length)  return
        else {
            $(".top-line__search-input").hide("slow");
            $(".user-block__account").show("slow");
          };
    
    event.stopPropagation();
  });
});