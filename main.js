$(document).on('ready', function() {

	/////////////////////////////////
	///////////  PART 1  ////////////
	/////////////////////////////////

	// $(document).on('click', '.text-box', function() {
	// 		var original = $(this)
	// 		var textArea = $('<textarea class="new-text-box"></textarea>')
	// 		original.after(textArea)
	// 		original.hide()
	// 		textArea.val(original.text())
	// 	});



	/////////////////////////////////
	///////////  PART 2  ////////////
	/////////////////////////////////

	$(document).on('click', '.text-box', function() {
		var original = $(this)
		var textArea = $('<textarea class="new-text-box"></textarea>')
		original.after(textArea)
		original.hide()
		textArea.val(original.text())
		textArea.on('blur', function() {
			textArea.hide()
			original.show()
			original.text(textArea.val())
			})
	});



	/////////////////////////////////
	///////////  PART 3  ////////////
	/////////////////////////////////

	// $(document).on('click', '.editable', function() {
	// 	var original = $(this)
	// 	var editableArea = $('<textarea></textarea>')
	// 	original.after(editableArea)
	// 	original.hide()
	// 	editableArea.val(original.text())
	// 	editableArea.on('blur', function() {
	// 		editableArea.hide()
	// 		original.show()
	// 		original.text(editableArea.val())
	// 		})
	// });















});