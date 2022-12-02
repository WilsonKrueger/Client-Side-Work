$(document).ready(function()
{    
//    let nextQuestion = 1;
    
    $("#nextButton").click(function()
    {
        let nextQ = $( "#nextQ" ).val();
        let questionHTML = "question" + nextQ + ".html";
        $( "#questionMainDiv" ).load( questionHTML );
        
//        nextQuestion++;
    });
    
//    $("#q1Button").click(function()
//    {
//        $( "#questionMainDiv" ).load( "question1.html" );
////        window.location = "/question1.html";
//    });
//    
//    $("#q2Button").click(function()
//    {
//        $( "#questionMainDiv" ).load( "question2.html" );
//    });
     
    $( "#datepicker" ).datepicker();

    $( function() {
    $( "#progressbar" ).progressbar({
      value: 50
    });
  } );
});


