var app = app || {};

app.PeopleView = Backbone.View.extend({
	el: '#contacts',
	
	initialize: function(initialContacts){
		this.collection = new app.People(initialContacts);
		this.listenTo( this.collection, 'add', this.renderContact );
		this.render();
	},
	
	render: function(){
		this.collection.each(function(item){
			this.renderContact(item);
		}, this);
	},
	
	renderContact: function(item){
		var personView = new app.PersonView({
			model: item
		});
		this.$el.append( personView.render().el );
	},
	
	events: {
		'click #addContact' : 'addContact'
	},
	
	addContact: function(e){
		e.preventDefault();
		var formData = {};
		
		$('#addPerson div').children('input').each(function(i, el){
			if($(el).val() != ''){
            	formData[ el.id ] = $( el ).val();
        	}		
		});
		this.collection.add(new app.Person(formData));
	}
});
