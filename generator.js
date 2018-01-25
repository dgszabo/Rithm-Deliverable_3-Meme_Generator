document.addEventListener('DOMContentLoaded', function() {
	
	// global variable for the meme container
	var memeContainer = document.getElementById('meme-container');

	// event listener for the submit button
	var submitButton = document.getElementById('submit-button');
	submitButton.addEventListener('click', function(event) {
		memeGenerator();
		event.preventDefault();
		document.getElementById('input-form').reset();
		addDelete();
	});

	// function to add event listeners to the delete buttons
	function addDelete() {
		var deleteButtons = document.getElementsByClassName('delete-button');
		
		for(var i = 0; i < deleteButtons.length; i++) {
			deleteButtons[i].addEventListener('click', function(event) {
				var memeToDelete = event.target.parentElement;
				memeContainer.removeChild(memeToDelete);
			});
		}	
	}

	// this function is the function that takes the inputs,
	// generates memes out of them and adds them to the screen
	function memeGenerator() {
		// this is creating the meme box div
		var mainDiv = document.createElement('div');
			mainDiv.classList.add('meme-box');
			mainDiv.classList.add('col-5');
			mainDiv.classList.add('d-inline-block');
			mainDiv.classList.add('my-2');
			mainDiv.classList.add('mx-2');

		// this is creating the box that contains the image and
		// the captions
		var memeBoxDiv = document.createElement('div');
			memeBoxDiv.classList.add('carousel');
			memeBoxDiv.classList.add('slide');
		
		// this takse the first line, creates the first caption
		// and adds it to the meme box
		var firstLineDiv = document.createElement('div');
			firstLineDiv.classList.add('carousel-caption');
			firstLineDiv.classList.add('top-caption');

		var firstLineText = document.getElementById('first-line-text').value;
			firstLineDiv.innerText = firstLineText;
		memeBoxDiv.append(firstLineDiv);

		// this takse the image source, creates the image
		// and adds it to the meme box
		var memeImage = document.createElement('img');
			memeImage.classList.add('d-block');
			memeImage.classList.add('img-fluid');
			memeImage.alt = 'Meme image';

		var memeImageAddress = document.getElementById('image-source-text').value;
			memeImage.src = memeImageAddress;
		memeBoxDiv.append(memeImage);

		// this takse the second line, creates the second caption
		// and adds it to the meme box
		var secondLineDiv = document.createElement('div');
			secondLineDiv.classList.add('carousel-caption');
			secondLineDiv.classList.add('bottom-caption');

		var secondLineText = document.getElementById('second-line-text').value;
			secondLineDiv.innerText = secondLineText;
		memeBoxDiv.append(secondLineDiv);

		// now the meme box is finished so add it to the main div
		mainDiv.append(memeBoxDiv);

		// this creates the delete button
		var deleteButton = document.createElement('button');
			deleteButton.classList.add('delete-button');
			deleteButton.classList.add('btn');
			deleteButton.classList.add('btn-info');
			deleteButton.classList.add('btn-block');
			deleteButton.classList.add('btn-sm');

		var deleteButtonSymbol = document.createElement('i');
			deleteButtonSymbol.classList.add('fa');
			deleteButtonSymbol.classList.add('fa-times');
			deleteButtonSymbol.classList.add('fa-2x');

		deleteButton.append(deleteButtonSymbol);

		// this adds the button to the main div
		mainDiv.append(deleteButton);

		// this adds the entire meme to the meme container
		memeContainer.append(mainDiv);
	}

	// let's call add delete for already existing memes
	addDelete();

});