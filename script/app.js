(() => {
	// put variable at the top
	const puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
				dropZoneContainer = document.querySelector(".puzzle-board"),
				dragImages = document.querySelectorAll(".puzzle-image"),
				dropZones = document.querySelectorAll(".drop-zone");

	// functions go in the middle

	function dragStart(e) {
		console.log('started dragging');
		//take the dragged image and move it into the drop zone
		// move it from the left container to the drop zone (reparent it)
		event.dataTransfer.setData("savedID", this.id);
	}

	function draggedOver(e) {
		e.preventDefault();
		console.log("dragged over me");
		// allow an element to be dragged over and then dropped
	}

	function dropped(e) {
		e.preventDefault();
		//override the browser / element's default behaviour, and do what I say!
		 if (this.childElementCount > 0) { return; }
		//check to see if there is an element here already, if so kill the function (return is an exit keyword)
		console.log('dropped something on me');
		let targetID = event.dataTransfer.getData("savedID");
		console.log("I dragged this image", targetID);
		//put the dragged image into this container
		event.target.appendChild(document.querySelector(`#${targetID}`));
	}

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
	dragImages.forEach(piece => piece.addEventListener("dragstart", dragStart));
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", draggedOver);
		zone.addEventListener("drop", dropped);
	});

	// emulate a click on the first bottom button and run the bg image function
	changeBGImage.call(puzzleSelectors[0]);

})();
