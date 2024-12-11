
// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function () {
	var newWidth = $win.width();
	var newHeight = $win.height();
	if (newWidth != clientWidth && newHeight != clientHeight) {
		location.replace(location);
	}
});

(function ($) {
	$.fn.typewriter = function () {
		this.each(function () {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function () {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse() {
	// Set the target date to June 18, 2024 at 00:00:00
	var targetDate = new Date("2024-06-18T00:00:00");

	// Get the current date and time
	var currentDate = new Date();

	// Calculate the difference in seconds
	var seconds = (currentDate.getTime() - targetDate.getTime()) / 1000;

	// Calculate days, hours, minutes, and seconds
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	seconds = Math.floor(seconds % 60);

	// Format hours, minutes, and seconds to always display two digits
	hours = ("0" + hours).slice(-2);
	minutes = ("0" + minutes).slice(-2);
	seconds = ("0" + seconds).slice(-2);

	// Construct the result HTML
	var result = "<span class=\"digit\">" + days + "</span> Days <span class=\"digit\">" + hours + "</span> Hours <span class=\"digit\">" + minutes + "</span> Minutes <span class=\"digit\">" + seconds + "</span> Seconds ";

	// Update the HTML element with id="clock" using jQuery
	$("#clock").html(result);
}
