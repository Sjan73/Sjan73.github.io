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
		data: actualTest
		});

    $('.js-test').append(content);


function checkAnswer(e) {
    
	e.preventDefault();
    
    var error = false;
    
    var user = [];
    
    for (var i = 0; i < actualTest.length; i++) {
        
   		var inputs = $('.box'+ i + 'input:checkbox');
   		   		
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


	function modalWindow () {

		for (var i = 0; i < actualTest.length; i++) {
    			var inputs = $('.box' + i +' input:checkbox');
    			
    			for (var k = 0; k < actualTest[i].answer.length; k++) {
    				
    				var checked = inputs[k].checked;

		if ((checked == true)) {
			if ((user[i][k]) == true) {
				var $modal = ('<div class="myModal"><div class="mymodal-inner"><h1 class="text-center">All correct!</h1><button class="center-block btn btn-primary btn-lg" id="exit">Exit</button></div></div>');
			} else {
				var $modal = ('<div class="myModal"><div class="mymodal-inner"><h1 class="text-center">Your answers is incorrect</h1><button class="center-block btn btn-primary btn-lg" id="exit">Exit</button></div></div>');
			}
		}
		console.log(();
	}
	}

		$('body').append($modal);

		var $exit = $( '#exit' );

		var reset = function() {
			$( 'input:checkbox' ).prop( 'checked', false ).prop( 'disabled', false );
    		var $modalWndw = $( '.myModal' );
    		$modalWndw.remove();

  			return false;
  		};

  	$exit.on( 'click', reset );
		
	}
	
  	  modalWindow();
};	

$('.check').on('click', checkAnswer);
});	
