let play = true

$("#play").click(function () {
	if (play == true) {
		$("#carousel").carousel('pause')
		play = false
	} else {
		$("#carousel").carousel({
			pause: true
		})
		play = true
	}
})