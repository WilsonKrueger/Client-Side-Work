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
//        let fs = 'font-size:' + $(this).children("option:selected").val() + 'px';
        let fs = $(this).children("option:selected").val();
        $("#para").css("fontSize", fs);
    });
 });
