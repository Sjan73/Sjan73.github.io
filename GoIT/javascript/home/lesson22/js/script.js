'use strict'

$(function() {
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

  let sendTolocal = JSON.stringify(questions);
  let localTest = localStorage.setItem("questions", sendTolocal);

  let restore = localStorage.getItem("questions");
  let actualTest = JSON.parse(restore);

  let html = $('#testing').html();
  var content = tmpl(html, {
    data: actualTest
  });

  $('.js-test').append(content);

  var $inputs = $('input:checkbox');

  function checkAnswer(e) {

    e.preventDefault();

    var rightAnswers = [];

    var getRightAnswers = function() {

      for (let i = 0; i < actualTest.length; i++) {

        var testAnswers = actualTest[i].answers;

        for (let j = 0; j < testAnswers.length; j++) {

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
    var rightAns = 0;

    var check = function() {

      for (let value of rightAnswers) {

        if (rightAnswers === true) {
          rightAns++;

          if (rightAnswers === givenAnswers) {
            answered++;
          }
        }
      }
      return rightAns === answered;
    };

    getRightAnswers();
    console.log('rightAnswers= ', rightAnswers);

    getGivenAnswers();
    console.log('givenAnswers= ', givenAnswers);

    check();
    console.log('answered= ', answered);

    function modalWindow() {

      if (check()) {
        var $modal = ('<div class="myModal"><div class="myModal-inner"><h1 class="text-center">All correct!</h1><button class="center-block btn btn-primary btn-lg" id="exit">Exit</button></div></div>');
      } else {
        var $modal = ('<div class="myModal"><div class="myModal-inner"><h1 class="text-center">Your answers is incorrect</h1><button class="center-block btn btn-primary btn-lg" id="exit">Exit</button></div></div>');
      }

      $('body').append($modal);

      var $exit = $('#exit');

      var reset = function() {
          $('input:checkbox').prop('checked', false);
          let $modalWndw = $('.myModal');
          $modalWndw.remove();

        return false;
      };

      $exit.on('click', reset);
    }

    modalWindow();
  };

  $('.check').on('click', checkAnswer);
});