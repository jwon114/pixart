$(document).ready(function () {

	var brushType = 'color';

	// tab to switch between brushes
	$('.tabs .tab-link').on('click', function() {
		var tabId = $(this).attr('data-tab');
		console.log(tabId);
		$('.tabs .tab-link').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$('#' + tabId).addClass('current');

		if (tabId === 'tab-1') {
			brushType = 'color'
		} else if (tabId === 'tab-2') {
			brushType = 'movieImage'
		}
	})


	// change background-color of box on button click
	$('.color-input-button').on('click', function(event) {
		event.preventDefault();
		var colorInput = $('.color-input').val();
		if (colorInput !== '') {
			brushType = 'color';
			$('.brush-box.color').css('background-color', colorInput);
		}
	})

	// enter key to change background-color of box
	$('.color-input').keypress(function(event) {
		var colorInput = $('.color-input').val();
		if (event.which === 13 && colorInput !== '') {
			$('.brush-box.color').css('background-color', colorInput);
		}
	})

	// create 100 divs of size 20px x 20px
	for (var i = 0; i < 100; i++) {
		var div = "<div class='square'></div>"
		$('.paint-area').append(div)
	}

	// mouseover event to change background-color
	$('body').on('mouseover', '.square', function(event) {
		var brushColor = $('.brush-box.color').css('background-color');
		var brushImage = $('.brush-box.movie').css('background-image');
		
		if (brushType === 'color' && brushColor !== '') {
			$(event.target).css('background-image', 'none');
			$(event.target).css('background-color', brushColor);
		} else if (brushType === 'movieImage' && brushImage !== '') {
			$(event.target).css('background-image', brushImage);
			$(event.target).css('background-size', 'cover');
		}
	})

	// AJAX request to find the movie background image on search
	$('.stamp-button').on('click', function() {
		var movieTitle = $('.stamp-input').val()

		if (movieTitle !== '') {
			var options = {
				url: 'https://omdbapi.com/?apikey=2f6435d9&t=' + encodeURI(movieTitle),
				method: 'get'
			}

			$.ajax(options)
			.done(function(response) {
				if (response !== '' || response !== null) {
					$('.brush-box.movie').css('background-image', 'url(' + response["Poster"] + ')');
					$('.brush-box.movie').css('background-size', 'cover');
				}
			})
		}
	})
})