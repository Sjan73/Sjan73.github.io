$(function() {
	var html = $('#resume').html();
	var data = {
		userName: 'Палас Андрій Ярославович',
		url: 'andriipalas2.jpg',
		mob: 'Моб.: 063-67-925-73',
		email: 'sajn73@gmail.com',
		facebook: 'Andrii Palas'
	};

	var content = tmpl(html, data);

	console.log(content);
	$('body').append(content);
});