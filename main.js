find_status=""

function setup(){
canvas=createCanvas(400,300)
canvas.center()
video=createCapture(VIDEO)
video.hide()
}

function start_function(){
    object_detection=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML="Status:- Detecting Object";
    input_value=document.getElementById("input").value;
}

function modelLoaded(){
    console.log("Model is loaded!");
    find_status=true;
}
function draw(){
    image(video,0,0,400,300)
}