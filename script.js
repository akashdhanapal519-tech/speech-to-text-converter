function startListening() {
    const button = document.getElementById("startBtn");
    const selectedLang = document.getElementById("language").value;

    button.innerText = "Listening... 🎧";
    button.style.background = "red";

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.lang = selectedLang;
    recognition.start();

    recognition.onresult = function(event) {
        const text = event.results[0][0].transcript;
        document.getElementById("output").innerText = text;

        button.innerText = "Start Listening";
        button.style.background = "#667eea";
    };

    recognition.onerror = function(event) {
        console.log("Error:", event.error);

        button.innerText = "Start Listening";
        button.style.background = "#667eea";
    };
}