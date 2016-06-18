$(function() {
  $('select').change(function() {
    var programType = $('#program').children('option:selected').text();
    var educationLevel = $('#education').children('option:selected').text();

    $('img').addClass('fade');

    if (programType == 'Scholarship') {
      $('.scholarship').removeClass('fade');
      if (educationLevel == 'K-12') {
        $('.k12').removeClass('fade');
      } else if (educationLevel == 'High School') {
        $('.hs').removeClass('fade');
      }
    };

    if (programType == 'Loan') {
      $('.loan').removeClass('fade');
      if (educationLevel == 'K-12') {
        $('.k12').removeClass('fade');
      } else if (educationLevel == 'High School') {
        $('.hs').removeClass('fade');
      }
    };

    if (educationLevel == 'K-12') {
      $('.k12').removeClass('fade');
      if (programType == 'Loan') {
        $('.loan').removeClass('fade');
      } else if (programType == 'Scholarship') {
        $('.scholarship').removeClass('fade');
      }
    };

    if (educationLevel == 'High School') {
      $('.hs').removeClass('fade');
      if (programType == 'Loan') {
        $('.loan').removeClass('fade');
      } else if (programType == 'Scholarship') {
        $('.scholarship').removeClass('fade');
      }
    };
  });
});