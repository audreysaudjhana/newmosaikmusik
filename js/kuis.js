(function() 
 {
  var allQuestions = [{
    question: "Istilah dalam musik yang berarti sendiri adalah",
    options: [" Solo", " Jomblo", " Single", " Jones"],
    answer: 0
  }, {
    question: "Hari musik sedunia jatuh pada tanggal ....",
    options: [" 9 Maret", " 21 Juni", " 10 Maret", " 14 November"],
    answer: 1
  }, {
    question: "R&B singkatan dari ....",
    options: [" Red and Blue", " Reggae and Blues", " Red Green Blue"," Rhythm and Blues"],
    answer: 3
  },{
    question: "Musik tradisional Talempong berasal dari daerah",
    options: [" Sumatra Barat", " Kalimantan Timur", " Jakarta", " Jawa Barat"],
    answer: 0
  }, {
    question: "Alat musik yang menggunakan udara sebagai media getarnya disebut",
    options: [" Membranofon", " Chordofon", " Idiofon", " Aerofon"],
    answer: 3
  },{
    question: "Alat musik yang tertua di Cina dinamakan ",
    options: [" Qin", " Mizmar", " Shornyo", " Shamisen"],
    answer: 0
  },{
    question: "King of Pop adalah julukan populer yang diberikan kepada",
    options: [" BTS", " Queen", " The Beatles", " Michael Jackson"],
    answer: 3
  },{
    question: "Yang bukan merupakan komposer musik era Klasik (1750 – 1820) adalah ....",
    options: [" Wolfgang A. Mozart", " Ludwig van Beethoven", " Johann Sebastian Bach", " Franz Schubert"],
    answer: 2
  },{
    question: "Band tertua di Indonesia",
    options: [" Koes Bersaudara", " The Tielman Brothers", " Koes Plus", " Bimbo"],
    answer: 1
  },{
    question: "Lagu Bungong Jeumpa berasal dari daerah",
    options: [" Jawa Barat", " Sumatra Barat", " Sumatra Utara", " Aceh"],
    answer: 3
    }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Mohon pilih salah satu opsi');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Pertanyaan No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('Kamu benar ' + correct + ' dari ' + allQuestions.length + ' pertanyaan');
        return score;
  }
})();