var app = app || {}

app.PersonView = Backbone.View.extend({
	
	url: '/js/templates/person.html',
	tagName: 'div',
	id: 'person',
	template: _.template( $( '#personTemplate' ).html() ),
	
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
