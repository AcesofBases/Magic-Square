noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,550);
    canvas.position(660,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log("poseNet Has Successfuly been loaded");
}
function gotPoses(results){
if (results.length > 0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX= " + noseX +"noseY= " + noseY)
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    console.log("Left Wrist X = " + leftWristX + " Right Wrist X " + rightWristX );
    difference= floor(leftWristX - rightWristX);
}
}
function draw(){
    background("pink");
document.getElementById("square_side").innerHTML= "side of the square is equal to = " + difference + " pixels.";
fill("yellow");
stroke("black");
square(noseX, noseY, difference);
}