define(['underscore','backbone','models/person'],function(_,Backbone,Person){

	People = Backbone.Collection.extend({
		model: Person
	});
	
	return People	
});


