$(document).ready(function()
{
    $('#accordion').accordion({
        collapsible: true,
        active: false,
        width: 'fill',
        header: 'h3'
    }).sortable({
        items: '.panel'
    });
    
    $("#addButton").click(function()
    {
        let title = $('#titleInput').val();
        let content = $('#contentInput').val();
        
        let appendText = '<div class = \'panel\'><h3>' + title + '</h3><p>' + content + '</p></div>';
        
        //Add the appended text to the accordion and refresh
        $('#accordion').append(appendText);
        $('#accordion').accordion( "refresh" );
        
        //Clear the contents
        $('#titleInput').val("");
        $('#contentInput').val("");
    });
    
    // When the user clicks the button, open the modal 
     $("#openModalButton").click(function() 
     {
        $('#myModal').show();
     });
     
     // When the user clicks the button, close the modal and run the effects
     $("#doneButton").click(function() 
     {
        $('#myModal').hide();
        
        // Run the effects
        $( "#accordion" ).effect("bounce", {times: 5}, "slow");
        $( "#accordion" ).effect( "highlight", {color:"green"}, 1000);
     });
     
});


