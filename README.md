<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Bolo Translate - Voice & Multilingual</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(to right, #fdfbfb, #ebedee);
      margin: 0; padding: 0;
      display: flex; justify-content: center; align-items: center;
      min-height: 100vh;
    }
    .container {
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
      padding: 2rem;
      width: 95%; max-width: 800px;
    }
    h1 {
      text-align: center;
      color: #333;
    }
    .section {
      margin-top: 1rem;
    }
    textarea {
      width: 100%; height: 100px;
      padding: 0.75rem;
      font-size: 1rem;
      border-radius: 8px;
      border: 1px solid #ccc;
      margin-bottom: 0.5rem;
    }
    select, button {
      padding: 0.6rem;
      font-size: 1rem;
      border-radius: 6px;
      margin-top: 0.5rem;
      margin-right: 0.5rem;
    }
    #output {
      background: #f4f4f4;
      padding: 1rem;
      min-height: 80px;
      border-radius: 6px;
      font-weight: bold;
    }
    .voice-btn {
      background: #007bff;
      color: white;
      border: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔊 Bolo Translate</h1>
    
    <div class="section">
      <label for="fromLang">From:</label>
      <select id="fromLang">
        <option value="auto">Detect Language</option>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="bn">Bengali</option>
        <option value="ta">Tamil</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>
      <label for="toLang">To:</label>
      <select id="toLang">
        <option value="hi">Hindi</option>
        <option value="en">English</option>
        <option value="bn">Bengali</option>
        <option value="ta">Tamil</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>
    </div>

    <div class="section">
      <textarea id="inputText" placeholder="Type or speak..."></textarea>
      <button class="voice-btn" onclick="startListening()">🎤 Speak</button>
      <button onclick="translate()">Translate</button>
    </div>

    <div class="section">
      <label>Translated Output:</label>
      <div id="output">...</div>
    </div>
  </div>

  <script>
    async function translate() {
      const inputText = document.getElementById("inputText").value;
      const fromLang = document.getElementById("fromLang").value;
      const toLang = document.getElementById("toLang").value;
      const output = document.getElementById("output");
      output.innerText = "Translating...";

      try {
        const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${fromLang}&tl=${toLang}&dt=t&q=${encodeURIComponent(inputText)}`);
        const data = await res.json();
        output.innerText = data[0][0][0];
      } catch (err) {
        output.innerText = "Error translating. Try again.";
      }
    }

    function startListening() {
      if (!('webkitSpeechRecognition' in window)) {
        alert("Voice input not supported in this browser.");
        return;
      }
      const recognition = new webkitSpeechRecognition();
      recognition.lang = 'en-IN';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.start();

      recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById("inputText").value = transcript;
      };
      recognition.onerror = function() {
        alert("Voice recognition failed. Try again.");
      };
    }
  </script>
</body>
</html>
