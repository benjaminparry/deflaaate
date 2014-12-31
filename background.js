// Wait until the comments have been loaded
setTimeout(function(){

	// Enable brutal mode to completely hide the comment 
	var brutal = false;

	// Actual comments found on www.dribbble.com
	// Keep these or roll your own
	var crap = [
	// Star ratings
	'★★★★★',
	// Hearts
	'<3',
	// Emoticons
	':)',
	':-)',
	';)',
	';-)',
	':p',
	// A
	'Absolutely stunning! Amazing job!',
	'Awesome!',
	'Amazing!',
	'Awesome.',
	// B
	'Brilliant. That is all.',
	// C
	'Cool!',
	'Clever.',
	// D
	'Damn!',
	'Damn, excellent!',
	// E
	// F
	'Fantastic idea!',
	// G
	'Good idea!',
	'Great idea!',
	'Great stuff.',
	'Great stuff per usual.',
	'genius',
	// H
	// I
	// J
	// K
	// L
	'Love it!',
	'Looks great man.',
	// M
	'Mind blown',
	// N
	'Nice.',
	'Nice!',
	// O
	'Oh mah gawd',
	// P
	// Q
	// R
	// S
	// T
	'This is perfect!',
	// U
	// V
	'Very nice!',
	'Very nice',
	'very nice',
	'Very cool!',
	'Very cool',
	'very cool',
	'Very sharp and smart!',
	// W
	'wow, wonderful!',
	// X
	// Y
	'yessss'
	// Z
	];

	// Loop though all the comments and add class to fade out the comment if crap
	var comments = document.getElementById("comments").querySelectorAll(".comment-body p"),
		i,
		x,
		el;


	for(i=0; i < comments.length; ++i) {
		el = comments[i];

		// Not sure if this is the best way to do this (loop within a loop, if this is even the best way to loop through them...)
		for(x=0; x < crap.length; ++x) {
			if( el.textContent.indexOf(crap[x]) != -1 ) {
				if (brutal == false) {

					el.parentNode.parentNode.classList.add("comment--crap");
						break;
				} else{
					el.parentNode.parentNode.classList.add("comment--hide");
						break;
				};
			}
		}
	}

}, 2000);