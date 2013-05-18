var app = app || {};

app.Person = Backbone.Model.extend({
	
	defaults: {
		image: 'img/default.gif',
		firstName: 'Unknown',
		lastName: 'Unknown',
		city: 'Unknown',
		state: 'Unknown',
		phone: 'Unknown'
	}
});

