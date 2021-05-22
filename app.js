var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?text=" + text;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Server gone mad! please leave it alone");
}

function clickHandler() {
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translated = json.contents.translated;
            outputDiv.innerText = translated;
        })
        .catch(errorHandler);
};

if (btnTranslate) {
    btnTranslate.addEventListener("click", clickHandler);
}

