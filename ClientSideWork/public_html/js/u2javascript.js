/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

$(document).ready(function(){
    $("#addButton").click(function()
    {
        $('#list').append($('<li>', {
             text: $('#itemInput').val()
        }));
        
        //Alternate the colors of the list
        $("#list li:nth-child(odd)").css('background-color', 'white');
        $("#list li:nth-child(even)").css('background-color', 'lightblue');
        
        //Clear the form
        $('#mainForm')[0].reset();
    });
    
    $("#removeButton").click(function()
    {
        $('#list li:last-child').remove();
    });
    

});

