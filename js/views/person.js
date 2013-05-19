define(['underscore','jquery','backbone','text!templates/person.html'],function(_,$,Backbone,personTemplate){
	
	PersonView = Backbone.View.extend({
		
		tagName: 'div',
		id: 'person',
		template: _.template( $(personTemplate).html() ),
		
		events: {
			'click .delete' : 'removeContact'
		},
		
		removeContact: function() {
			this.model.destroy();
			this.remove();
		},
		
		render: function(){
			this.$el.html(
				this.template(this.model.toJSON())
			);
		return this;
		}
	});
	return PersonView;
});


