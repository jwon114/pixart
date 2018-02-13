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

for (var i = 0; i <= 100; i++) {
	var div = "<div class='square'></div>"
	$('body').append(div)
}

$('body').on('click', '.square', function(event) {
	var colorInput = $('.color-input').val();
	if (colorInput !== '') {
		$(event.target).css('background-color', colorInput);
	}
})