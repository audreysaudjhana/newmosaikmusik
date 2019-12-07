(function() 
 {
  var allQuestions = [{
    question: "Lagu yang dinyanyikan oleh satu orang disebut",
    options: ["Solo", "Duet", "Trio", "Quartet"],
    answer: 0
  }, {
    question: "Musik yang menggunakan suara manusia sebagai media utamanya adalah pengertian dari",
    options: ["Musik instrumental", "Musik vokal", "Musik polifonik", "Musik Profan"],
    answer: 1
  }, {
    question: "Jenis musik yang didominasi permainan gitar penuh improvisasi adalah",
    options: ["Musik R&B", "Musik jazz", "Musik blues","Musik rock"],
    answer: 2
  },{
    question: "Musik tradisional Talempong berasal dari daerah",
    options: ["Sumatra barat", "Kalimantan timur", "Betawi", "Jawa barat"],
    answer: 0
  }, {
    question: "Alat musik yang menggunakan udara sebagai sumber bunyinya disebut",
    options: ["Membranophone", "Chordophone", "Idiophone", "Aerophone"],
    answer: 3
  },{
    question: "Alat musik yang tertua di Cina dinamakan ",
    options: ["Qin", "Mizmar", "Shornyo", "Shamisen"],
    answer: 0
  },{
    question: "Musik yang berciri improvisasi, lahir, berkembang, dan populer di kalangan masyarakat kulit hitam Amerika Serikat adalah musik",
    options: ["R & B", "Jazz", "Rap", "Rock"],
    answer: 1
  },{
    question: "Musik lebih sebagai ungkapan pribadi yang diungkapkan dalam penerapan dinamika, adalah ciri-ciri pada musik zaman",
    options: ["Peralihan", "Romantik", "Klasik", "Barok"],
    answer: 2
  },{
    question: "Alat musik India yang memiliki jangkauan nada 2 oktaf dan bentuknya mirip gitar berlengan panjang adalah",
    options: ["Tabl", "Vina", "Ong fu", "Shasin"],
    answer: 1
  },{
    question: "Lagu Bungong Jeumpa berasal dari daerah",
    options: ["Jawa barat", "Sumatra barat", "Sumatra utara", "Aceh"],
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
        score.append('Kamu benar ' + correct + ' pertanyaan dari ' + allQuestions.length + ' pertanyaan');
        return score;
  }
})();