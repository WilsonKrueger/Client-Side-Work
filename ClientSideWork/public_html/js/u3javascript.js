/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

$(document).ready(function(){
    $("#textColor").change(function() {
        updateColor();
    });
    
    $("#fontSizeSelector").change(function() {
        updateFontSize();
    });
    
    $("#backgroundColor").change(function() {
        updateBackgroundColor();
    });
    
    function updateColor() {
        let col = $("#textColor").children("option:selected").val();
        $("#para").css("color", col);
    }
    
    function updateFontSize() {
        let fs = $("#fontSizeSelector").children("option:selected").val();
        fs += "px";
        $("#para").css("fontSize", fs);
    }
    
    function updateBackgroundColor() {
        let bc = $("#backgroundColor").children("option:selected").val();
        $("#para").css("background-color", bc);
    }
 });
