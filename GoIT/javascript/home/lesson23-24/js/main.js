requirejs.config({
	paths: {
		'jquery': "https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery"
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		}
	}
});

require(
	[
		'tmpl',
		'model',
		'view',
		'controller',
		'jquery'
	],
	function(tmpl, Model, View, Controller, $) {
		console.log('$:', $);
			
		$(function () {
			var firstToDoList = ['Iphone4', 'Iphone4S', 'Iphone5', 'Iphone5S', 'Iphone6'];
			var newModel = new Model(firstToDoList);
			console.log('newModel: ', newModel);
			var newView = new View(newModel);
			console.log('newView: ', newView);
			var newController = new Controller(newModel, newView);
			console.log('newController: ', newController);
		});

	}
);