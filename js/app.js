$('.color-input-button').on('click', function(event) {
	event.preventDefault();
	var colorInput = $('.color-input').val();
	if (colorInput !== '') {
		$('.brush-box').css('background-color', colorInput)
	}
})
