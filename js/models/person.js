define(['underscore', 'backbone'], function(_, Backbone) {

	Person = Backbone.Model.extend({
		
		defaults: {
			image: 'img/default.gif',
			firstName: 'Unknown',
			lastName: 'Unknown',
			address: 'Uknown',
			city: 'Unknown',
			state: 'Unknown',
			phone: 'Unknown'
		}
	});
	return Person;
});