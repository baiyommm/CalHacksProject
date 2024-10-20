// JavaScript for controlling voice playback using Web Speech API
function speakText(textId, voiceOption) {
    const text = document.getElementById(textId).value;

    const msg = new SpeechSynthesisUtterance();
    msg.text = text;

    // Setting different voice options
    const voices = window.speechSynthesis.getVoices();
    const descriptionId = `description${textId.charAt(textId.length - 1)}`;

    switch (voiceOption) {
        case 1:
            msg.voice = voices[0]; // Pick a default voice or index 0
            displayDescription(descriptionId, "Harry Voice: Children, Male, British Accent");
            break;
        case 2:
            msg.voice = voices[1] || voices[0]; // Pick another voice or default if not available
            displayDescription(descriptionId, "Ron Voice: Children, Male, British Accent");
            break;
        case 3:
            msg.voice = voices[2] || voices[0]; // Pick another voice or default if not available
            displayDescription(descriptionId, "Hagrid Voice: 50s, Male, Coarse Voice");
            break;
        case 4:
            msg.voice = voices[3] || voices[0]; // Pick another voice or default if not available
            displayDescription(descriptionId, "Hermione Voice: Children, Female, British Accent");
            break;
        case 5:
            msg.voice = voices[4] || voices[0]; // Pick another voice or default if not available
            displayDescription(descriptionId, "Malfoy Voice: Children, Male, Aggressive Voice");
            break;
        case 6:
            msg.voice = voices[5] || voices[0]; // Pick another voice or default if not available
            displayDescription(descriptionId, "Dumbledore Voice: 80s, Male, Calm");
            break;
        case 7:
            msg.voice = voices[6] || voices[0]; // Pick another voice or default if not available
            displayDescription(descriptionId, "Snape Voice: 40s, Male, Sharp Voice");
            break;
        case 8:
            msg.voice = voices[7] || voices[0]; // Pick another voice or default if not available
            displayDescription(descriptionId, "McGonagall Voice: 60s, Female, Calm Voice");
            break;
        case 9:
            msg.voice = voices[8] || voices[0]; // Pick another voice or default if not available
            displayDescription(descriptionId, "Dudley: Children, Male, Aggressive Voice");
            break;
        case 10:
            msg.voice = voices[9] || voices[0]; // Pick another voice or default if not available
            displayDescription(descriptionId, "Morgan Voice: Young Adult, Female, British Accent.");
            break;
        case 11:
            msg.voice = voices[10] || voices[0]; // Pick another voice or default if not available
            displayDescription(descriptionId, "Daniel Voice: Young Adult, Male, US Accent, Narrated");
            break;
        case 12:
            msg.voice = voices[11] || voices[0]; // Pick another voice or default if not available
            displayDescription(descriptionId, "Caleb: Young Adult, Male, US Accent");
            break;
    }

    window.speechSynthesis.speak(msg);
}

// Function to show description box with smooth transition
function displayDescription(descriptionId, descriptionText) {
    const descriptionBox = document.getElementById(descriptionId);
    descriptionBox.textContent = descriptionText;
    descriptionBox.classList.add("show");
}
