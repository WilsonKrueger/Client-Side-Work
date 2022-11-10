$(document).ready(function(){
    $('#accordion').accordion({
        collapsible: true,
        active: false,
        width: 'fill',
        header: 'h3'
    }).sortable({
        items: '.panel'
//        axis: "y",
//        handle: "h3",
//        stop: function( event, ui ) {
//          // IE doesn't register the blur when sorting
//          // so trigger focusout handlers to remove .ui-state-focus
//          ui.item.children( "h3" ).triggerHandler( "focusout" );
// 
//          // Refresh accordion to handle new order
//          $( this ).accordion( "refresh" );
//        }
    });
    
    $("#addButton").click(function()
    {
        let title = $('#titleInput').val();
        let content = $('#contentInput').val();
        
        let appendText = '<div class = \'panel\'><h3>' + title + '</h3><p>' + content + '</p></div>';
//        let appendText = '<div class = \'group\'><h3>' + title + '</h3><div><p>' + content + '</p></div></div>';
        
        //Add the appended text to the accordion and refresh
        $('#accordion').append(appendText);
        $('#accordion').accordion( "refresh" );
        
        //Clear the form
        $('#mainForm')[0].reset();
    });
    
    // Get the modal
    var modal = document.getElementById("myModal");
    
    modal.style.display = "block";
    
});


