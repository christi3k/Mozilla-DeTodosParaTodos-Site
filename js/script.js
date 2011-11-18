var DETODOSPARATODOS = {
	main : function () {
		$('#mission_brief').click( function() {
			// Disable the link for no-js
			$(this).find('a').attr('href', 'javascript:;');

			window.location.href = 'mission.html';
		});
	}
}

$(document).ready(function () {
	DETODOSPARATODOS.main();
});