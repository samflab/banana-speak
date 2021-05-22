var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
if(btnTranslate){
    btnTranslate.addEventListener("click",clickHandler);   
}
if(txtInput){
    console.log(txtInput);
}

function clickHandler(){
    console.log("Clicked");
    console.log("input", txtInput.value);
 };