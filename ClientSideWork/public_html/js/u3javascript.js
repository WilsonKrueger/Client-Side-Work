/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

$(document).ready(function(){
    $( "#color" ).change(function() {
        let bc = 'background-color:' + $(this).children("option:selected").val();
        $("#para").attr('style',bc);
    });
    $( "#fontSizeSelector" ).change(function() {
        let fs = $(this).children("option:selected").val();
        fs += "px";
        $("#para").css("fontSize", fs);
    });
 });
