(() => {
	// put variable at the top
	const puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
				dropZoneContainer = document.querySelector(".puzzle-board");

	// functions go in the middle

	//changes the bg image of the drop zone div using the style property
	function changeBGImage() {
		//get the custom data attribute from the clicked button
		let imageRef = this.dataset.imageref;

		//`` is Not a quote. It's a JavaScript template string
		dropZoneContainer.style.backgroundImage = `url(images/backGround${imageRef}.jpg)`

		//intermediate way to do this
		// dropZoneContainer.style.backgroundImage = `url(images/backGround${this.dataset.imageref}.jpg)`

	}

	//event handling at the bottom
	puzzleSelectors.forEach(button => button.addEventListener("click", changeBGImage));

	// emulate a click on the first bottom button and run the bg image function
	changeBGImage.call(puzzleSelectors[0]);

})();
