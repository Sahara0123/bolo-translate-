
function translateText() {
    const inputText = document.getElementById('inputText').value;
    const selectedLang = document.getElementById('languageSelect').value;
    const outputDiv = document.getElementById('outputText');

    // Fake translation for demo purposes
    outputDiv.innerText = "Translated [" + selectedLang + "]: " + inputText.split('').reverse().join('');
}
