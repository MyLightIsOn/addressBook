define(['underscore','jquery','backbone','handlebars','text!templates/person.html'],function(_,$,Backbone,handlebars,personTemplate){
	
	PersonView = Backbone.View.extend({
		
		tagName: 'div',
		id: 'person',
		
		events: {
			'click .delete' : 'removeContact'
		},
		
		removeContact: function() {
			this.model.destroy();
			this.remove();
		},
		
		render: function(){
      		var js = this.model.toJSON();
      		var template = Handlebars.compile($(personTemplate).html());
      		$(this.el).html(template(js));
      		return this;  
   		},

	});
	return PersonView;
});


