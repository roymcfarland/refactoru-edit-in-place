$(document).on('ready', function() {
	
	$(document).on('click', '.input', function() {
		console.log('Click handler fired');
		$(this).after(
			'<textarea class="new-text-box">'+
			'Insert Text'+
			'</textarea>'
			)
		$(this).remove();
		
	})
  
});