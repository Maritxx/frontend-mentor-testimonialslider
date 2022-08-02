//The $ sign makes clear it's using jQuery.
//Syntax goes $(selector).action();
//Selector finds/selects an HTML element.

function pageHeight()  {
	var headerHeight = $("header").outerHeight();
	//Outerheight gets the height (including padding/border/margin) for the first element that matches the selector.
	//Sets a variable that gets the height from the header.

	var footerHeight = $("footer").outerHeight();
	//Sets a variable that gets the height from the footer.

	var remainHeight = headerHeight + footerHeight;
	//Sets a variable that is the sum of both the header and footer.

	$("main").css("min-height", "calc(100vh - " + remainHeight + "px)");
	//.css can be used to set a style property for the selected element. 
	//When setting the style, select the property you wish to change, followed by the value it should get.
	//Changes the min-height of 'main' to be 100vh minus the height of the footer and header.
}

$(window).on("load resize orientationchange", function () {
	pageHeight();
});
//The 'window' selector represents an open window in the browser.
//The .on action attaches one or more event handlers to the selected element.
//The function within the .on action specifies that it needs a function to run.
//Runs the pageHeight function when the page gets loaded, resized or if the orientation (portrait or landscape) is changed. 



let slideNumber = 1;
showSlides(slideNumber);


$("#buttonPrevious").click(function() {
	changeSlide(-1);
});

$("#buttonNext").click(function() {
	changeSlide(1);
});


function changeSlide(n) {
	showSlides(slideNumber += n);
};
//n stands for a constant that you don't know the value of yet. It is changing within the function.
//+= is a mathematical operation. It takes the value of the variable (n), adds or subtracts the new number to it and then 'saves' that as the new value of the variable.
//Makes the 'showSlides' function run upon button click.


function showSlides(n) {
	let i;
	let slides = $("div.testimonial-slide__container");

	if (n > slides.length) {
		slideNumber = 1
	};
	//Sets the slider back to the first quote if the slide-number is higher than the number of actual slides.

	if (n < 1 ) {
		slideNumber = slides.length
	};

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[slideNumber - 1].style.display = "block";
	//Arrays start counting at 0. Removes one from the slideNumber to ensure it won't give an undefined error.
};