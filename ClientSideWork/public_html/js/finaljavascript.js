// Declare variables
var progressbarDiv = $( "#progressbar" ).progressbar();
var progressbarLabel = $( ".progress-label" );

var numberCorrect = 0;
var userAnswer1;
var correctAnswer1;
var userAnswer2;
var correctAnswer2;
var userAnswer3;
var correctAnswer3;
var userAnswer4;
var correctAnswer4;
var userAnswer5;
var correctAnswer5;

$(document).ready(function()
{    
    var datepicker = $("#datepicker").datepicker();
    
    $("#navButton").click(function()
    {
        var navIndex = parseInt($( "#navIndex" ).val());
        let questionHTML;
        
        // Value to update the progress bar
        var progress = 20 * (navIndex - 1);
        
        // Determine next load 
        if(navIndex === 0)
        {
            questionHTML = "finalMain.html #questionMainDiv";
            
            // Reset progress to 0 if going to main page
            progress = 0;
        }
        
        else if(navIndex === 6)
        {
            questionHTML = "results.html #resultsDiv";
        }
        
        else 
        {
            questionHTML = "question" + navIndex + ".html #questionDiv";
        }
        
        // Load the proper html
        $("#questionMainDiv").load(questionHTML ,function(){
            $.getScript("../js/finaljavascript.js"); 
        });

        // Update the progress bar and label 
        progressbarDiv.progressbar({
            value: parseInt(progress)
        });
        progressbarLabel.text(progress + "%");
    });
    
    // Validate Question 1
    $("#validateQ1Button").click(function()
    {
        userAnswer1 = datepicker.val();
        correctAnswer1 = "08/26/2022";
        
        // Disable Submit Answer button
        $('#validateQ1Button').prop('disabled', true);
        
        //Enable Next Question button
        $('#navButton').prop('disabled', false);
    });
    
    // Validate Question 2
    $("#validateQ2Button").click(function()
    {
        userAnswer2 = $('input[name="TorF"]:checked').val();
        correctAnswer2 = "True";
        
        // Disable Submit Answer button
        $('#validateQ2Button').prop('disabled', true);
        
        //Enable Next Question button
        $('#navButton').prop('disabled', false);
    });
    
    // Validate Question 3
    $("#validateQ3Button").click(function()
    {
        userAnswer3 = $('input[name="JSDev"]:checked').val();
        correctAnswer3 = "10 Days";
        
        // Disable Submit Answer button
        $('#validateQ3Button').prop('disabled', true);
        
        //Enable Next Question button
        $('#navButton').prop('disabled', false);
    });
    
    // Validate Question 4
    $("#validateQ4Button").click(function()
    {
        userAnswer4 = $('input[name="PercentUsed"]:checked').val();
        correctAnswer4 = "90%";
        
        // Disable Submit Answer button
        $('#validateQ4Button').prop('disabled', true);
        
        //Enable Next Question button
        $('#navButton').prop('disabled', false);
    });
    
    // Validate Question 5
    $("#validateQ5Button").click(function()
    {
        userAnswer5 = $('#slider').slider("value");
        correctAnswer5 = 75;
        
        // Disable Submit Answer button
        $('#validateQ5Button').prop('disabled', true);
        
        //Enable Next Question button
        $('#navButton').prop('disabled', false);
    });
    
    // Slider functionality
    $( function() 
    {
        var handle = $( "#custom-handle" );
        $( "#slider" ).slider({
            create: function() {
                handle.text( $( this ).slider( "value" ) );
            },
            slide: function( event, ui ) {
                handle.text( ui.value );
            }     
        });
    });
    
    // Calculate the final results
    $("#calcResultsButton").click(function()
    {
        let q1Para = $("#q1Results p");
        let q2Para = $("#q2Results p");
        let q3Para = $("#q3Results p");
        let q4Para = $("#q4Results p");
        let q5Para = $("#q5Results p");
        
        // Check Question 1
        if(userAnswer1 === correctAnswer1)
        {
            numberCorrect++;
            q1Para.html("Question 1: Correct!");
            q1Para.css("color", "green");
        }
        else
        {
             q1Para.html("Question 1: Incorrect... The correct answer was " + correctAnswer1);
        }
        
        // Check Question 2
        if(userAnswer2 === correctAnswer2)
        {
            numberCorrect++;
            q2Para.html("Question 2: Correct!");
            q2Para.css("color", "green");
        }
        else
        {
             q2Para.html("Question 2: Incorrect... The correct answer was " + correctAnswer2);
        }
        
        // Check Question 3
        if(userAnswer3 === correctAnswer3)
        {
            numberCorrect++;
            q3Para.html("Question 3: Correct!");
            q3Para.css("color", "green");
        }
        else
        {
             q3Para.html("Question 3: Incorrect... The correct answer was " + correctAnswer3);
        }
        
        // Check Question 4
        if(userAnswer4 === correctAnswer4)
        {
            numberCorrect++;
            q4Para.html("Question 4: Correct!");
            q4Para.css("color", "green");
        }
        else
        {
             q4Para.html("Question 4: Incorrect... The correct answer was " + correctAnswer4);
        }
        
        // Check Question 5
        if(userAnswer5 >= correctAnswer5)
        {
            numberCorrect++;
            q5Para.html("Question 5: Correct!");
            q5Para.css("color", "green");
        }
        else
        {
             q5Para.html("Question 5: Incorrect... The correct answer was greater than or equal to " + correctAnswer5 + " ;)");
        }
        
        
        let scoreText = "Score: " + numberCorrect + "/5";
        $("#score h3").html(scoreText);
        
        $("#thanks h3").html("Thank you for taking the quiz! If you would like to play again, please press the \"Try Again!\" button. Have a great day :)");
        
        //Disable Calculate Results button and Enable Try Again button
        $('#calcResultsButton').prop('disabled', true);
        $('#navButton').prop('disabled', false);
    });
});


