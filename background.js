jQuery(document).ready(function () {
    
    // Wait until the comments have been loaded
    setTimeout(function(){

    	// Actual comments found on www.dribbble.com
    	// Keep these or roll your own
    	var crap = [
    		'<3',
    		'love it',
    		'yes',
    		'yessss',
    		'good',
    		'nice',
    		'Nice.',
    		'Nice!',
    		'nice!',
    		'nice! ',
    		'damn',
    		'very cool',
    		'!!!!!!!!!!',
    		'!!!!!!!!!',
    		'!!!!!!!!',
    		'!!!!!!!',
    		'!!!!!!',
    		'!!!!!',
    		'!!!!',
    		'!!!',
    		'!!',
    		'!',
    		'Absolutely stunning! Amazing job!',
    		'Good idea !',
    		'Amazing job (;',
    		'nice one!',
    		'wow, wonderful!',
    		'Very sharp and smart!',
    		'Fantastic idea!',
    		'wow, wonderful!',
    		'Great stuff per usual.',
    		'awesome',
    		'Awesome',
    		'Awesome!',
    		'Awesome.',
    		'Oh mah gawd.'
    	];

    	// Loop though all the comments and add class to fade out the comment if crap
    	$("#comments .comment").filter(function() {

    	     if ($.inArray($('.comment-body p', this).text(), crap) > -1) {
	    	     $(this).addClass("comment--crap");
    	     };
    	     	
    	});

    }, 2000);
});