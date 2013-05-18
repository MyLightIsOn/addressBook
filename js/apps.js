var app = app || {};

$(function() {
    var person = [
        { 
        	firstName: 'Lawrence', 
        	lastName: 'Moore', 
        	city: 'Indianapolis', 
        	state: 'Indiana',
        	phone: '317-506-9426'  
        },
        { 
        	firstName: 'Lawrence', 
        	lastName: 'Moore', 
        	city: 'Indianapolis', 
        	state: 'Indiana',
        	phone: '317-506-9426'  
        },
        { 
        	firstName: 'Lawrence', 
        	lastName: 'Moore', 
        	city: 'Indianapolis', 
        	state: 'Indiana',
        	phone: '317-506-9426'  
        },
        { 
        	firstName: 'Lawrence', 
        	lastName: 'Moore', 
        	city: 'Indianapolis', 
        	state: 'Indiana',
        	phone: '317-506-9426'  
        },
    ];

    new app.PeopleView( person );
});