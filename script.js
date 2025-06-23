
function startVoiceInput() {
  alert("Voice input feature will activate here.");
}

function speakText() {
  alert("Speaking translated text...");
}

function switchLanguages() {
  let from = document.getElementById("fromLang");
  let to = document.getElementById("toLang");
  [from.value, to.value] = [to.value, from.value];
}
