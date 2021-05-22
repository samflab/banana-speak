var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

if (btnTranslate) {
    btnTranslate.addEventListener("click", clickHandler);
}
if (outputDiv) {
   // outputDiv.innerText = "Masudha Meher";
    console.log(outputDiv);
}

function clickHandler() {
    outputDiv.innerText = "translated: "+ txtInput.value;
};