

Webcam.set({
    width : 350,
    height :300,
    image_format : 'png',
    png_quality : 90
});

var camera = document.getElementById("webcam_output");
var image;

Webcam.attach('#webcam_output');

function TakeSnapshot(){
    Webcam.snap(function (uri){
        document.getElementById("photo_output").innerHTML = '<img id = "output" src="'+uri+'"/>';
    });
}
console.log("ml5 version : ", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ZcTmM1RDD/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}
function Check(){
    image = document.getElementById("output");
    classifier.classify(image, gotResult);
}
function gotResult(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("Name").innerHTML =  result[0].label;   
        document.getElementById("Accuracy").innerHTML = result[0].confidence.toFixed(3)*100+"%";
    }
}