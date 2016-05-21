$(".top-line__currency-list").hide();

$(".top-line__currency-select").click(function() {
    $(".top-line__currency-list").toggle("slow");
    return false;
});

$(function(){
  $(document).click(function(event) {
    if ($(event.target).closest(".top-line__currency-item").length) return;
    $(".top-line__currency-list").hide("slow");
    event.stopPropagation();
  });
});


