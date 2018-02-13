$('.color-input-button').on('click', function(event) {
	event.preventDefault();
	var colorInput = $('.color-input').val();
	if (colorInput !== '') {
		$('.brush-box').css('background-color', colorInput);
	}
})

$('.color-input').keypress(function(event) {
	var colorInput = $('.color-input').val();
	if (event.which === 13 && colorInput !== '') {
		$('.brush-box').css('background-color', colorInput);
	}
})
