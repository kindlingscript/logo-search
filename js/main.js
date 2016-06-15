$(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    var programType = $('#program').children('option:selected').text();
    var educationLevel = $('#education').children('option:selected').text();
    selectEduPrograms(programType, educationLevel);
  });
});

var selectEduPrograms = function(programType, educationLevel) {
  console.log('Education level is ' + educationLevel);
  console.log('Program type is ' + programType);

  if (programType == 'Program Type' && educationLevel == 'Education Level') {
    $('img').removeClass('fade');
  }

  if (programType == 'Scholarship' && educationLevel == 'High School') {
    $('.scholarship-hs').removeClass('fade');
  } else if (programType == 'Scholarship' && educationLevel == 'K-12') {
    $('.scholarship-k12').removeClass('fade');
  } else if (programType == 'Loan' && educationLevel == 'High School') {
    $('.loan-hs').removeClass('fade');
  } else if (programType == 'Loan' && educationLevel == 'K-12') {
    $('.loan-k12').removeClass('fade');
  } else if (programType == 'Scholarship') {
    $('.scholarship, .scholarship-k12, .scholarship-hs').removeClass('fade');
  } else if (programType == 'Loan') {
    $('.loan, .loan-k12, .loan-hs').removeClass('fade');
  } else if (educationLevel == 'K-12') {
    $('.k12, .scholarship-k12, .loan-k12').removeClass('fade');
  } else if (educationLevel == 'High School') {
    $('.hs, .scholarship-hs, .loan-hs').removeClass('fade');
  }
};