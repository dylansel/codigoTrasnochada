

window.onload = function() {
    var video = document.getElementById("video");
    video.oncanplay = function() {
        video.play();
    };
};

var inputCode = document.getElementById("inputCode");
var btnContinuar = document.getElementById("btnContinuar");

inputCode.addEventListener("input", function() {
    if (inputCode.value) {
        btnContinuar.style.display = "block";
    } else {
        btnContinuar.style.display = "none";
    }
});
function validateInput() {
    if (inputCode.value === "18951") {
        var successBlock = document.getElementById("successBlock");
        var successBlock1 = document.getElementById("successBlock1");
        successBlock1.style.opacity = "1";
        inputCode.style.border = "3px solid green";
        inputCode.style.boxShadow = "0px 0px 25px green";
        inputCode.style.background = "green";
        inputCode.style.color = "black";
        setTimeout(() => {
           successBlock.style.display = "flex";
       }, 2000);
    }else{
        var errorBlock = document.getElementById("errorBlock");
        errorBlock.style.opacity = "1";
        inputCode.style.border = "4px solid red";

        inputCode.style.boxShadow = "0px 0px 25px red";
        setTimeout(function() {
            errorBlock.style.opacity = "0";
            inputCode.style.border = "2px solid #ccc";
            inputCode.style.boxShadow = "0px 0px 25px #88888888";

        }, 3000);
    }
}
btnContinuar.addEventListener("click",validateInput );



    window.onload = function() {
        var inputCode = document.getElementById("inputCode");
        inputCode.setAttribute("autocomplete", "off");
    };
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            validateInput();
        }
    });
 