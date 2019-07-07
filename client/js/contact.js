var formSubmitted = function(data) {
	$('form')[0].reset();
	$("#formSubmittedModal").modal();
};

$(document).ready(function() {
	$('#subscribe-newsletter').on('change', function() {
		var $subscribeCheckbox = $('[for="subscribe-newsletter"]');
		var $yesUpdates = $subscribeCheckbox.find('.yes-updates');
		var $noUpdates = $subscribeCheckbox.find('.no-updates');

		if ($(this).is(':checked')) {
			$yesUpdates.show();
			$noUpdates.hide();
		} else {
			$noUpdates.show();
			$yesUpdates.hide();
		}
	});
	$('form').submit(function(e) {
		e.preventDefault();
		var formData = new FormData(this);
		var url = $(this).attr('action');

		$.ajax({
			url: url,
			type: 'POST',
			data: formData,
			success: function (data) {
				alert(data)
			},
			cache: false,
			contentType: false,
			processData: false
		});

		formSubmitted();
	});
});