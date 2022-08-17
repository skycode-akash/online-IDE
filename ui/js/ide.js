let editor;

window.onload = function() {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/gruvbox");
    editor.session.setMode("ace/mode/c_cpp");
    editor.focus();
    editor.setShowPrintMargin(false);
}

function changeLanguage() {
    let language = $("#languages").val();

    if(language == 'c')document.getElementById('langExt').textContent ='Main.c'; 
    else if(language == 'cpp')document.getElementById('langExt').textContent ='Main.cpp';
    else if(language == 'php')document.getElementById('langExt').textContent ='Main.php';
    else if(language == 'python')document.getElementById('langExt').textContent ='Main.py';
    
    if(language == 'c' || language == 'cpp')editor.session.setMode("ace/mode/c_cpp");
    else if(language == 'php')editor.session.setMode("ace/mode/php");
    else if(language == 'python')editor.session.setMode("ace/mode/python");

    editor.focus();

}

function executeCode() {
    $.ajax({

        url: "../app/compiler.php",

        method: "POST",

        data: {
            language: $("#languages").val(),
            code: editor.getSession().getValue()
        },

        success: function(response) {
            $(".output").text(response);
        }

    })

}