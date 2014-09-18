$(document).on('ready', function() {
	
	$('.text-box').click(function() {
		console.log('Click handler fired')
		$('.input').append(
			'<textarea class="new-text-box">'+
			'Insert Text'+
			'</textarea>'
			)
	})
  
});