'use strict'

$(function() {
	var questions = [ {
  		question: 'What is ECMAScript?',
  		answer: ['New programming language',
  				'Recycled realization JavaScript',
  				'Language specification JavaScript'],
  		correctAnswer: {
  			2: true
  		}	
	},
	{
 		question: 'What is JavaScript?',
 		answer: ['Analog of Java with more functions',
  				'High-level interpreted programming language',
  				'Imperative programming language'],
 		correctAnswer: {
  			1: true
  		}	
	},

	{
  		question: 'What constructions for cycles is in JavaScript?',
  		answer: ['Only two: for и while.',
  				'Only one: for',
  				'Three: for, while и do...while.'],
 		correctAnswer: {
  			2: true
  		}	
	}];


	var sendTolocal = JSON.stringify( questions );
    var localTest = localStorage.setItem( "data", sendTolocal );

    var restore = localStorage.getItem( "data" );
    var actualTest = JSON.parse( restore ); 

    var html = $('#testing').html();
	var content = tmpl(html, {
		data: questions
		});

    $('.js-test').append(content);


function checkAnswer(e) {
    
	e.preventDefault();
    
    var error = false;
    
    var user = [];
    
    for (var i = 0; i < actualTest.length; i++) {
        
   		var inputs = $('.form-group'+ i + 'input:checkbox');
   		   		
    	var userAnswered = {};
   			for (var k = 0; k < inputs.length; k++) { 
     		   var checked = inputs[k].checked;
       
       		 var right = actualTest[i].correctAnswer[k+1] == true;
        
       		 if (checked !== right) {
       		 	userAnswered[k]=false;
       		     error = true;
                
       		 } else {
        		userAnswered[k]=true;
        		};
		};
		
        user.push(userAnswered);
	};

  		var modal;
  		var $body = $( 'body' );

	for (var i = 0; i < actualTest.length; i++) {

    	var inputs = $('.form-group' + i +' input:checkbox');
    	var inputsShowResult =  $('.mymodal .form-group' + i + 'input:checkbox');

  		for (var k = 0; k < actualTest[i].answer.length; k++) {
    				
    		var checked = inputs[k].checked;	

  		if (checked == true) {

    		modal = ('<div class="mymodal"><div class="mymodal-inner"><h1 class="text-center">All correct!</h1><a class="center-block btn btn-primary" id="exit">Exit</a></div></div>');

  		} else {

    		modal = ('<div class="mymodal" id="mm"><div class="mymodal-inner"><h1 class="text-center">You were wrong!</h1><a class="center-block btn btn-primary" id="exit">Exit</a></div></div>');

  		}
	}
	};

  $body.append(modal);
};	

$('.check_answers').on('click', checkAnswer);
});	
