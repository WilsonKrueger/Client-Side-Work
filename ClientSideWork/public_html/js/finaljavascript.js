$(document).ready(function()
{    
//    let nextQuestion = 1;
    
    $("#nextButton").click(function()
    {
        let nextQ = $( "#nextQ" ).val();
        let questionHTML = "question" + nextQ + ".html";
        $( "#questionMainDiv" ).load( questionHTML );
        
        let progress = 20 * (nextQ - 1);
        
//        $( "#progressbar" ).progressbar({ value: progress});
//        $( "#progressbar" ).progressbar( "value", progress );
        $( "#progressbar" ).progressbar( "option", "value", progress );
        $( ".progress-label" ).text(progress + "%");
        
//        nextQuestion++;
    });
    
//    $( function() {
//    var progressbar = $( "#progressbar" ),
//      progressLabel = $( ".progress-label" );
// 
//    progressbar.progressbar({
//      value: false,
//      change: function() {
//        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
//      },
//      complete: function() {
//        progressLabel.text( "Complete!" );
//      }
//    });
    
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

    $( "#progressbar" ).progressbar();
    
//    $( function() {
//        $( "#progressbar" ).progressbar({
//          value: 50
//        });
//    } );
});


