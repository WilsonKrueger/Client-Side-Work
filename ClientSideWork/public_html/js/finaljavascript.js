$(document).ready(function()
{    
    $("#q1Button").click(function()
    {
        $( "#questionMainDiv" ).load( "question1.html #question1Div" );
    });
     
    $( function() {
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
  } );
});


