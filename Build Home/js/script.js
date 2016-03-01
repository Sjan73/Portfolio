$(document).ready(function() {
 
  	$("#owl-demo").owlCarousel({
 		autoPlay: 3000,
    	slideSpeed : 300,
    	paginationSpeed : 400,
    	singleItem:true,

  	}); 
});

$(document).ready(function() {

	$('.accordion__tab').eq(0).siblings('.accordion__content').show();
	$('.accordion__tab').eq(0).addClass('accordion__active');
	
    function close_accordion_section() {
        $('.accordion .accordion__tab').removeClass('accordion__active');
        $('.accordion .accordion__content').slideUp(300).removeClass('open');
    }

    $('.accordion__tab').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.accordion__active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('accordion__active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });
});