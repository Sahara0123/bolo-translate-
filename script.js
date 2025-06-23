const languages = {
  "en": "English",
  "hi": "Hindi",
  "es": "Spanish",
  "fr": "French",
  "de": "German",
  "zh": "Chinese",
  "ar": "Arabic"
};

window.onload = () => {
  const fromLang = document.getElementById("fromLang");
  const toLang = document.getElementById("toLang");
  for (let code in languages) {
    fromLang.innerHTML += `<option value="${code}">${languages[code]}</option>`;
    toLang.innerHTML += `<option value="${code}">${languages[code]}</option>`;
  }
  fromLang.value = "en";
  toLang.value = "hi";
};

function startVoiceInput() {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = document.getElementById("fromLang").value;
  recognition.onresult = (e) => {
    document.getElementById("inputText").value = e.results[0][0].transcript;
    translateText();
  };
  recognition.start();
}

function speakText() {
  const utterance = new SpeechSynthesisUtterance(document.getElementById("outputText").value);
  utterance.lang = document.getElementById("toLang").value;
  speechSynthesis.speak(utterance);
}

$('#inputText').on('input', translateText);
$('#fromLang, #toLang').on('change', translateText);

function translateText() {
  const text = $('#inputText').val();
  const from = $('#fromLang').val();
  const to = $('#toLang').val();
  if (!text) return;
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(text)}`;
  $.get(url, function(data) {
    $('#outputText').val(data[0][0][0]);
  });
}
