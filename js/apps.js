require.config({
    // your configuration key/values here
    baseUrl: "js", // generally the same directory as the script used in a data-main attribute for the top level script
    paths: {
    	'underscore' : 'libs/underscore/underscore',
    	'jquery' : 'libs/jquery/jquery',
    	'backbone' : 'libs/backbone/backbone',
    	'text': 'libs/require/text'
    }, // set up custom paths to libraries, or paths to RequireJS plugins
    
    shim: {
        'underscore': {
          	exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }

});
	    
var person = [
	        { 
	        	firstName: 'Lawrence', 
	        	lastName: 'Moore',
	        	address: '270 Oak Grove', 
	        	city: 'Indianapolis', 
	        	state: 'Indiana',
	        	phone: '111-111-1111'  
	        },
	        { 
	        	firstName: 'Lawrence', 
	        	lastName: 'Moore',
	        	address: '270 Oak Grove',  
	        	city: 'Indianapolis', 
	        	state: 'Indiana',
	        	phone: '111-111-1111'  
	        },
	        { 
	        	firstName: 'Lawrence', 
	        	lastName: 'Moore',
	        	address: '270 Oak Grove',  
	        	city: 'Indianapolis', 
	        	state: 'Indiana',
	        	phone: '111-111-1111'  
	        },
	        { 
	        	firstName: 'Lawrence', 
	        	lastName: 'Moore',
	        	address: '270 Oak Grove',  
	        	city: 'Indianapolis', 
	        	state: 'Indiana',
	        	phone: '111-111-1111'  
	        },
];

require(['underscore','backbone','js/views/people.js'], function(_,Backbone,PeopleView){
	new PeopleView( person );
});

