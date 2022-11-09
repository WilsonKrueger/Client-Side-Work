$(document).ready(function(){
    $('#accordion').accordion({
        collapsible: true,
        active: false,
        width: 'fill',
        header: 'h3'
    }).sortable({
//        items: '.panel',
        axis: "y",
        handle: "h3",
        stop: function( event, ui ) {
          // IE doesn't register the blur when sorting
          // so trigger focusout handlers to remove .ui-state-focus
          ui.item.children( "h3" ).triggerHandler( "focusout" );
 
          // Refresh accordion to handle new order
          $( this ).accordion( "refresh" );
        }
    });
    
    $("#addButton").click(function()
    {
        let title = $('#titleInput').val();
        let content = $('#contentInput').val();
        
        let appendText = '<div class = \'group\'><h3>' + title + '</h3><div><p>' + content + '</p></div></div>';
        
        $('#accordion').append(appendText)
            .accordion('destroy').accordion();
        
        //Clear the form
        $('#mainForm')[0].reset();
    });
    
//    var modal = $("#myModal").val();

//    var modal = document.getElementById("myModal");
//    
//    modal.style.display = "none";    
//    
//    function setUpModal() {
//        let fadf
//    }
 });
//
//// Get the modal
//var modal = document.getElementById("myModal");
//
//// Get the button that opens the modal
//var btn = document.getElementById("myBtn");
//
//// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];
//
//// When the user clicks the button, open the modal 
//btn.onclick = function() {
//  modal.style.display = "block";
//}
//
//// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
//  modal.style.display = "none";
//}
//
//// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
//  if (event.target == modal) {
//    modal.style.display = "none";
//  }
//}
