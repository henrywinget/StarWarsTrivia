//When page loads...
$(document).ready(function () {

    $("image").css("display", "none");

    //Variables for the game
    var timerNumber = 30;
    var numCorrect = 0;
    var numIncorrect = 0;
    var numAnswered = 0;
    var answers = [];
    var curQuestion = 0;


    //Sets up questions and answers for our game
    var gameQuestions =
        [{
            question: "<h2>In the 1980 film <i>The Empire Strikes Back</i>, before being performed by famous puppeteer and voice actor, Frank Oz, the character of Yoda was initially to be played by..</h2>",
            answers: ["<h3>A child</h3>", "<h3>A monkey</h3>", "<h3>A dog</h3>", "<h3>CGI</h3>"],
            correct: 1,
            image: "assets/images/Q1.png",
            snippet: "According to the book The Making of Star Wars by J.W. Rinzler, George Lucas originally planned for Yoda to be played by an adorable monkey wearing a mask and carrying a cane."
        },
        {
            question: "<h2>Which word was never actually spoken in any of the Star Wars movies?</h2>",
            answers: ["<h3>Wookiee</h3>", "<h3>Tauntaun</h3>", "<h3>Ewok</h3>", "<h3>Jawa</h3>"],
            correct: 2,
            image: "assets/images/q2.gif",
            snippet: "The word 'Ewok' is never uttered by a character in the original trilogy. Although, the species is identified in the script and closing credits."
        },
        {
            question: "<h2>What was the original name for <i>Return of the Jedi</i>?</h2>",
            answers: ["<h3><i>Revenge of the Jedi</i></h3>", "<h3><i>Dawn of the Jedi</i></h3>", "<h3><i>Revival of the Jedi</i></h3>", "<h3><i>Return of the Light</i></h3>"],
            correct: 0,
            image: "assets/images/q3.png",
            snippet: "The screenplay was written by Lawrence Kasdan and Lucas (with uncredited contributions by David Peoples and Marquand), based on Lucas' story. Kasdan claims he told Lucas that <i>Return of the Jedi</i> was 'a weak title', and Lucas later decided to name the film <i>Return of the Jedi</i> because a 'true Jedi would not seek revenge.'"
        },
        {
            question: "<h2>Which alien species from a different movie or media makes a cameo in the 1999 film <i>The Phantom Menace</i>?</h2>",
            answers: ["<h3>Xenomorph from the <i>Alien</i> series</h3>", "<h3>Alien species from <i>Close Encounters of the Third Kind</i></h3>", "<h3>Klingon from <i>Star Trek</i></h3>", "<h3>E.T. from <i>E.T.: the Extra-Terrestial</i></h3>"],
            correct: 3,
            image: "assets/images/q4.png",
            snippet: "The alien race of E.T.: The Extra-Terrestrial makes an appearance in <i>The Phantom Menace</i> — officially connecting the worlds of Lucas and Spielberg sci-fi. A senator and his delegation from planet Brodo Asogi are present in the Grand Convocation Chamber when Queen Amidala calls for a vote of no confidence."
        },
        {
            question: "<h2>CGI was used heavily in the prequel films. Of the following, which was NOT solely computer generated in theatrical releases?</h2>",
            answers: ["<h3>Yoda</h3>", "<h3>Gungans (Jar Jar Binks species)</h3>", "<h3>Clone troopers</h3>", "<h3>Battle droids</h3>"],
            correct: 0,
            image: "assets/images/q5.png",
            snippet: "In the 1999 film, <i>The Phantom Menace</i> Yoda makes his only prequel appearance as a puppet. In the later Blu-Ray releases, George Lucas replaces him with a CGI model to corraborate with the later two movies."
        },
        {
            question: "<h2>Which of these 4 did NOT play Anakin Skywalker/Darth Vader?</h2>",
            answers: ["<h3>Sebastian Shaw</h3>", "<h3>James Earl Jones</h3>", "<h3>Thomas Patton</h3>", "<h3>Jake Lloyd</h3>"],
            correct: 2,
            image: "assets/images/q6.gif",
            snippet: "Anakin Skywalker/Darth Vader has been played by six different people in live action film: David Prowse, James Earl Jones, Bob Anderson, Sebastian Shaw, Jake Lloyd, and Hayden Christensen."
        },
        {
            question: "<h2>Which of these lines were NOT actually spoken in any of the Star Wars movies?</h2>",
            answers: ['<h3>"Luke, I am your father."</h3>', '<h3>"May the force be with you."</h3>', '<h3>"Great kid! Don&apos;t get cocky."</h3>', '<h3>"I&apos;d just as soon kiss a Wookiee."</h3>'],
            correct: 0,
            image: "assets/images/q7.gif",
            snippet: 'A common misconception, the line actually reads, "No, I am your father." The orginal lines of the script were read out upon filming by David Prowse as something along the lines of "No, Obi-Wan killed your father." to avoid leaks, but dubbed over by James Earl Jones later.'
        },
        {
            question: "<h2>In 2012, Disney acquired Lucasfilm for...</h2>",
            answers: ["<h3>$3.24 billion</h3>", "<h3>$5.4 billion</h3>", "<h3>$4.06 billion</h3>", "<h3>$3.96 billion</h3>"],
            correct: 2,
            image: "assets/images/q8.gif",
            snippet: "The Walt Disney Company acquired Lucasfilm in 2012 at a valuation of $4.06 billion. They have since made over that mark with the release of <i>The Force Awakens</i>, <i>Rogue One</i>, and <i>The Last Jedi</i> with plans for many more in the upcoming future."
        },
        {
            question: "<h2>Which of these published media are NOT solely animated Star Wars content?</h2>",
            answers: ["<h3>Star Wars: Clone Wars</h3>", "<h3>Star Wars: The Clone Wars</h3>", "<h3>Star Wars Holiday Special</h3>", "<h3>Star Wars Rebels</h3>"],
            correct: 2,
            image: "assets/images/q9.gif",
            snippet: 'The Star Wars Holiday Special is a 1978 made-for-TV movie in which the main storyline of the film transpires on the Wookiee home planet of Kashyyyk. Chewbacca and Han Solo visit the planet to celebrate the Wookiee holiday Life Day with his family. George Lucas is quoting in saying "that he would be happy if every copy could be tracked down and burned.."'
        },
        {
            question: "<h2>The original name of Luke Skywalker was..</h2>",
            answers: ["<h3>Anakin Spacewalker</h3>", "<h3>Luke Cliegg Lars</h3>", "<h3>Jolee Bindo</h3>", "<h3>Luke Starkiller</h3>"],
            correct: 3,
            image: "assets/images/q10.gif",
            snippet: "Luke Skywalker was initially called 'Luke Starkiller'. The name is made homage to in the 2008 video game <i>The Force Unleashed</i> where the main character is codenamed 'Starkiller' and in the 2015 film, <i>The Force Awakens</i>, where the planet version of the Death Star is named 'Starkiller Base.'"
        }];

    //Hides certain elements when needed
    function hide(elementId) {
        $(elementId).css("visibility", "hidden");
    };
    function show(elementId) {
        $(elementId).css("visibility", "visible");
    };
    function write(elementId, thing) {
        $(elementId).html('<h3>' + thing + "</h3>")
    };

    //Sets up the questions per round
    function questionWrite() {
        if (curQuestion <= (gameQuestions.length - 1)) {
            $('#questions').html('<h2>' + gameQuestions[curQuestion].question + '</h2>');
            answers = gameQuestions[curQuestion].answers;
            show('.answer');
            for (var i = 0; i < answers.length; i++) {
                $('#answer-' + i).html('<h3>' + answers[i] + '</h3>');
            }
        }
        else {
            gameOver();
        }
    };

    //Clears the answers after a round
    function answerClear() {
        for (var i = 0; i < 4; i++) {
            $('#answer-' + i).html('');
        }
        hide('.answer');
    };

    //Starts the game
    function start() {
        $('#clock').html('<h2> Time Remaining: ' + timerNumber + '</h2>');
        counter = setInterval(countDown, 1000);

        $('#start').empty();

        hide('#start-button');

        questionWrite();
    };

    //Clears the page after rounds
    function clearScreen() {
        $('#start').empty();
        $('#questions').empty();
        $('#stats').empty();
        answerClear();
    }

    //Begins logic for our timer 
    function countDown() {
        timerNumber--;
        $('#clock').html('<h2> Time Remaining: ' + timerNumber + '</h2>');

        if (timerNumber === 0) {
            gameOver();
        }
    };

    //Clears the timer when needed
    function stop() {
        clearInterval(counter);
    };

    //Resets the game
    function reset() {
        stop();
        timerNumber = 30;
        answers = [];
        curQuestion = 0;
        clearScreen();
        $('#clock').empty();
        show('#start');
        hide('#reset');
    };

    //When all the rounds are complete..
    function gameOver() {
        stop();
        clearScreen();

        $('#stats').append('<h3>Results</h3>');
        $('#stats').append('<h3>Total Questions Answered: ' + numAnswered + '</h3>');
        $('#stats').append('<h3>Number of Correct Answers: ' + numCorrect + '</h3>');
        $('#stats').append('<h3>Number of Incorrect Answers: ' + numIncorrect + '</h3>');
        show('#reset');
    };

    //Sets the next question round
    function nextQuestion() {
        $('#image').css('display', 'none');
        $('#questions').css('display', 'initial');
        $('#answers-div').css('display', 'initial');
        $('#correct-answer').css('display', 'none');
        clearInterval();
        timerNumber = 30;
    }

    //When an answer is clicked, this runs through logic
    // to determine if it is correct or incorrect and 
    // what to display
    $('.answer').click(function () {
        var clicked = $(this);
        var value = clicked.attr('value');
        var correctAnswer = gameQuestions[curQuestion].correct;

        if (value == correctAnswer) {
            numAnswered++;
            numCorrect++;
            curQuestion++;
            $('#questions').empty();
            $('#correct-answer').html('<h3> You picked ' + answers[value] + '.</h3> <br><h3>The Correct Answer was ' + answers[correctAnswer] + '.</h3>');
            nextQuestion();
            answerClear();
            questionWrite();

        } else {
            numAnswered++;
            numIncorrect++;
            curQuestion++;
            timerNumber = 30;
            $('#correct-answer').html('<h3> You picked ' + answers[value] + '.</h3> <br><h3>The Correct Answer was ' + answers[correctAnswer] + '.</h3>');
            $('#questions').empty();
            // setTimeout(nextQuestion, 5000);
            // setTimeout(answerClear, 5000);
            nextQuestion();
            answerClear();
            questionWrite();
            // setTimeout(questionWrite, 5000);
        }
    });

    $('#start').on('click', start);
})