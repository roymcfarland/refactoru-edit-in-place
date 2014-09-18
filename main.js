$(document).on('ready', function() {
	

	/////////////////////////////////
	///////////  PART 1  ////////////
	/////////////////////////////////

	// $(document).on('click', '.input', function() {
	// 	console.log('Click handler fired')
	// 	$(this).after(
	// 		'<textarea class="new-text-box">'+
	// 		'Insert Text'+
	// 		'</textarea>'
	// 		)
	// 	$(this).hide()
	// })



	/////////////////////////////////
	///////////  PART 2  ////////////
	/////////////////////////////////

	$(document).on('click', '.text-box', function() {
		var text = $('.text-box').text()
		console.log('Click handler fired')
		$(this).after('<textarea class="new-text-box"></textarea>')
		$(this).hide()
		$('.new-text-box').val(text)
	})
  
});