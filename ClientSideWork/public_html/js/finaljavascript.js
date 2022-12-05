$(document).ready(function()
{    
    var progressbarDiv = $( "#progressbar" ).progressbar();
    var progressbarLabel = $( ".progress-label" );
    $( "#datepicker" ).datepicker();
    
    var numberCorrect = 1;
    var userAnswer;
    var correctAnswer;
    var q1Correct = true;
    var q2Correct = false;
    var q3Correct = false;
    var q4Correct = false;
    var q5Correct = false;

    $("#navButton").click(function()
    {
        var navIndex = parseInt($( "#navIndex" ).val());
        let questionHTML;
        
        //Validate questions 1-5
        if(navIndex === 2)
        {
            validateQ1();
        }
//        else if(navIndex === 3)
//        {
//            validateQ2();
//        }
//        else if(navIndex === 4)
//        {
//            validateQ3();
//        }
//        else if(navIndex === 5)
//        {
//            validateQ4();
//        }
        
        if(navIndex === 6)
        {
//            validateQ5();
            calculateResults();
        }
        else if(navIndex === 0)
        {
            questionHTML = "finalMain.html #questionMainDiv";
        }
        else 
        {
            questionHTML = "question" + navIndex + ".html #questionDiv";
        }
        
        // Load the proper html
        $("#questionMainDiv").load(questionHTML ,function(){
            $.getScript("../js/finaljavascript.js"); 
        });
        
        // Value to update the progress bar
        var progress = 20 * (navIndex - 1);
        
        // Reset progress to 0 if going to main page
        if(navIndex === 0)
        {
            progress = 0;
        }

        // Update the progress bar and label 
        progressbarDiv.progressbar({
            value: parseInt(progress)
        });
        progressbarLabel.text(progress + "%");
        
        
    });
    
    function validateQ1() 
    {
        userAnswer = $("#datepicker").val();
        correctAnswer = "08/26/2022";
        
        if(userAnswer === correctAnswer)
        {
            numberCorrect++;
            q1Correct = true;
        }
    }
    
    function calculateResults() 
    {
        $("#score").text("Score: " + numberCorrect + "/5");
        if(q1Correct)
        {
            $("#q1Results").text("You got question 1 correct!");
        }
    }
    
    //Method to load the results
});


