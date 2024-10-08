var typed = new Typed(".multiple", {
    strings: ["Front End Developer", "Back End Developer", "Web Developer", "Database Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
function textToAudio() {
    let speech = new SpeechSynthesisUtterance();
    
    speech.lang = "en-US";
    speech.text = "Welcome to the Home Page! You can explore it by clicking the sidebar options or interacting with the moving elements.";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    speechSynthesis.speak(speech);
}
// setInterval(textToAudio, 20000);
// window.addEventListener('DOMContentLoaded', function() {
//     textToAudio();
// });