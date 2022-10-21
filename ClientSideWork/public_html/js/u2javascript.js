/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

$(document).ready(function(){
    $("#addButton").click(function()
    {
//        var item = $('#itemInput').val();
//        alert(item);
    
        $('#list').append($('<li>', {
             text: $('#itemInput').val()
        }));
        
        $("#list li:nth-child(odd)").css('background-color', 'white');
        $("#list li:nth-child(even)").css('background-color', 'blue');
    });
    

});

