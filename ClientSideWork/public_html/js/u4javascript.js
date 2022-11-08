$(document).ready(function(){
    $('#accordion').accordion({
        collapsible: true,
        active: false,
        width: 'fill',
        header: 'h3'
    }).sortable({
        items: '.panel'
    });
    
//    var modal = $("#myModal").val();

    var modal = document.getElementById("myModal");
    
    modal.style.display = "none";    
    
//    function setUpModal() {
//        let fadf
//    }
 });
