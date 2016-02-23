'use strict';

$(function () {
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
  }, {
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
  }, {
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
  }];

  var sendTolocal = JSON.stringify(questions);
  var localTest = localStorage.setItem("questions", sendTolocal);

  var restore = localStorage.getItem("questions");
  var actualTest = JSON.parse(restore);

  var html = $('#testing').html();
  var content = tmpl(html, {
    data: actualTest
  });

  $('.js-test').append(content);

  var $inputs = $('input:checkbox');

  function checkAnswer(e) {

    e.preventDefault();

    var rightAnswers = [];

    var getRightAnswers = function getRightAnswers() {

      for (var i = 0; i < actualTest.length; i++) {

        var testAnswers = actualTest[i].answers;

        for (var j = 0; j < testAnswers.length; j++) {

          var currentAnswer = actualTest[i].answers[j].right;
          rightAnswers.push(currentAnswer);
        }
      }
    };

    var givenAnswers = [];

    var getGivenAnswers = function getGivenAnswers() {

      $inputs.each(function () {

        if ($(this).prop('checked')) {

          givenAnswers.push(true);
        } else {

          givenAnswers.push(false);
        }
      });
    };

    var answered = 0;
    var rightAns = 0;

    var check = function check() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {

        for (var _iterator = rightAnswers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;


          if (rightAnswers === true) {
            rightAns++;

            if (rightAnswers === givenAnswers) {
              answered++;
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
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
        var $modal = '<div class="myModal"><div class="myModal-inner"><h1 class="text-center">All correct!</h1><button class="center-block btn btn-primary btn-lg" id="exit">Exit</button></div></div>';
      } else {
        var $modal = '<div class="myModal"><div class="myModal-inner"><h1 class="text-center">Your answers is incorrect</h1><button class="center-block btn btn-primary btn-lg" id="exit">Exit</button></div></div>';
      }

      $('body').append($modal);

      var $exit = $('#exit');

      var reset = function reset() {
        $('input:checkbox').prop('checked', false);
        var $modalWndw = $('.myModal');
        $modalWndw.remove();

        return false;
      };

      $exit.on('click', reset);
    }

    modalWindow();
  };

  $('.check').on('click', checkAnswer);
});