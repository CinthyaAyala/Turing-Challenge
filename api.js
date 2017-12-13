$.ajax({
  url: 'https://opentdb.com/api.php?amount=10&type=boolean',
  method: 'GET',
  contentType: 'application/json; charset=UTF-8',
  success: handleResults  // Name of a function to be called after API call was successful
});

function handleResults (response_code){
  response_code.data.forEach(function(results)  {
    var question = results.question;
    var correctAnswer = results.correct_answer;
    var incorrectAnswer = results.incorrect_answer;
    var quest = $(document.createElement("p"));
        quest.attr(question, correct_answer,incorrect_answer)
        quest.appendTo("#question-container")
        console.log(question);
        console.log(correctAnswer);
        console.log(incorrectAnswer);
      })
};
//https://opentdb.com/api.php?amount=1&type=boolean
