var program_test = {
	wrapper: function() {
		var container = document.createElement('div');
		container.classList.add('wrapper');
		container.style.marginTop = '25px';
		document.body.appendChild(container);
	},
	h2: function() {
		var title = document.createElement('h2');
		title.classList.add('title_h2');
		title.innerHTML = ('Тест по программированию');
		title.style.marginLeft = '250px';
		title.style.marginBottom = '25px';

		var wrapper = document.querySelector('.wrapper');
		wrapper.insertBefore(title, wrapper.children[0]);
	},
	ol: function() {
		var list = document.createElement('ol');
		list.classList.add('ol_list');
		list.style.marginLeft = '100px';
			for (var i = 1; i < 4; i++) {
				var list_menu = document.createElement('li');
				list_menu.classList.add('li_item')
				list_menu.innerHTML = ('Вопрос №'+ [i]);
				list.appendChild(list_menu);
				list.style.fontSize = "16px";
			}
		var wrapper = document.querySelector('.wrapper');
		wrapper.insertBefore(list, wrapper.children[1]);
	},
	dl: function() {
		for (var j = 0; j < 3; j++) {
			var dl_list = document.createElement('dl');
		  dl_list.classList.add('dl-horizontal');
		  dl_list.style.marginLeft = '-150px';
		  dl_list.style.marginTop = '20px';

			for (var i = 1; i < 4; i++) {
				var dt = document.createElement('dt');
				var dd = document.createElement('dd');
				dd.innerHTML =('Вариант ответа №' + [i]);
				var checkBox = document.createElement('input');
				checkBox.type = 'checkbox';
				dt.appendChild(checkBox);
				dl_list.appendChild(dt);
				dl_list.appendChild(dd);
			}

		var li_menu = document.querySelectorAll('.li_item');
		li_menu[j].insertBefore(dl_list, li_menu[i]);
		} 
	},
	button: function() {
	 	var submit = document.createElement('input');
	 	submit.classList.add('btn-lg');
	 	submit.type = 'submit';
		submit.value = ('Проверить мои результаты');
		submit.style.marginLeft = '200px';
		submit.style.marginBottom = '50px';

	var wrapper = document.querySelector('.wrapper');
	wrapper.appendChild(submit);	
	 }
}

program_test.wrapper();
program_test.h2();
program_test.ol();
program_test.dl();
program_test.button();