var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();


function start_recog() {
    document.getElementById("textarea").innerHTML = "";
    recognition.start();

}

recognition.onresult = function (event) {

    console.log(event);

    var content = event.results[0][0].transcript;
    document.getElementById("textarea").innerHTML = content;

    if (content == "take my selfie") {
        console.log("taking selfie");
        speak()

    }

}
function speak() {
    var synth = window.speechSynthesis
    var data = "taking your selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(data)
    synth.speak(utterThis)
    Webcam.attach("camera")

    setTimeout(function () {
        takeSnapshot();
        save;
    }, 5000);
    
}
Webcam.set({
    width: 300,
    height: 300,
    image_format: "jpg",
    jpg_quality: 90
});

camera = document.getElementById("camera")

function takeSnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfieImage"> src="' + data_uri + '">';
    })

}

function save(){
    link=document.getElementById("link");
    img=document.getElementById("selfie_image").src;
    link.herf=img;
    link.click();

}
