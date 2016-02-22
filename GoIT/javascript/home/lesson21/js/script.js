'use strict'


  var questions = [{
      question: 'What is ECMAScript?',
      answers: [{
        answer: 'New programming language',
        right: false
      }, {
        answer: 'Recycled realization JavaScript',
        right: false
      }, {
        answer: 'Language specification JavaScript',
        right: true
      }]
    },

    {
      question: 'What is JavaScript?',
      answers: [{
        answer: 'Analog of Java with more functions',
        right: false
      }, {
        answer: 'High-level interpreted programming language',
        right: true
      }, {
        answer: 'Imperative programming language',
        right: false
      }]
    },

    {
      question: 'What constructions for cycles is in JavaScript?',
      answers: [{
        answer: 'Only two: for и while.',
        right: false
      }, {
        answer: 'Only one: for',
        right: false
      }, {
        answer: 'Three: for, while и do...while.',
        right: true
      }]
    }
  ];


  var sendTolocal = JSON.stringify(questions);
  var localTest = localStorage.setItem("questions", sendTolocal);

  var restore = localStorage.getItem("questions");
  var actualTest = JSON.parse(restore);

  var html = $('#testing').html();
  var content = tmpl(html, {
    data: actualTest
  });

  $('.js-test').append(content);

  var i, j;
  var $inputs = $('input:checkbox');

  function checkAnswer(e) {

    e.preventDefault();

    var rightAnswers = [];

    var getRightAnswers = function() {

      for (i = 0; i < actualTest.length; i++) {

        var testAnswers = actualTest[i].answers;

        for (j = 0; j < testAnswers.length; j++) {

          var currentAnswer = actualTest[i].answers[j].right;
          rightAnswers.push(currentAnswer);

        }
      }
    };

    var givenAnswers = [];

    var getGivenAnswers = function() {


      $inputs.each(function() {

        if ($(this).prop('checked')) {

          givenAnswers.push(true);

        } else {

          givenAnswers.push(false);

        }
      });
    };

    var answered = 0;
    var rightAnswers1 = 0;

    var check = function() {

      for (var i = 0; i < rightAnswers.length; i++) {

        if (rightAnswers[i] === true) {
          rightAnswers1++;

          if (rightAnswers[i] === givenAnswers[i]) {
            answered++;
          }

        }
      }
      console.log(rightAnswers1);
      console.log(answered);
      return rightAnswers1 === answered;
    };

    getRightAnswers();
    console.log('rightAnswers= ', rightAnswers);

    getGivenAnswers();
    console.log('givenAnswers= ', givenAnswers);

    check();
    console.log('answered= ', answered);

    function modalWindow() {

      if (check()) {
        var $modal = ('<div class="myModal"><div class="mymodal-inner"><h1 class="text-center">All correct!</h1><button class="center-block btn btn-primary btn-lg" id="exit">Exit</button></div></div>');
      } else {
        var $modal = ('<div class="myModal"><div class="mymodal-inner"><h1 class="text-center">Your answers is incorrect</h1><button class="center-block btn btn-primary btn-lg" id="exit">Exit</button></div></div>');
      }

      $('body').append($modal);

      var $exit = $('#exit');

      var reset = function() {
        $('input:checkbox').prop('checked', false).prop('disabled', false);
        var $modalWndw = $('.myModal');
        $modalWndw.remove();

        return false;
      };

      $exit.on('click', reset);

    }

    modalWindow();
  };

  $('.check').on('click', checkAnswer);



try {
  module.exports = checkAnswer;
} catch (e) {}