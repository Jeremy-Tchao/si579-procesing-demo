let face1;
let face2
let poseNet; 
let video; 
let pose;

function preload() {
  
  face1 = loadImage("face1.png");
  face2 = loadImage("face2.png");
  face = loadImage("face.png");
  
}

function setup() {
  
  
 createCanvas(1366, 768, WEBGL);
 background(125); 
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video,modelLoaded)
  poseNet.on('pose',gotPoses);
  

    
}

function draw() {
  
texture(face)
if(pose){
  
  
  
  var dirX = (pose.rightEye.x/10) * 6;
  var dirY = (500 - pose.leftEye.y/10) * 5;
  
  

  if(pose.leftEye.confidence > 0.8 && pose.rightEye.confidence > 0.8) //pose 1
    {
      texture(face);
      rotateX(dirY);
      rotateY(dirX);
      if(pose.leftWrist.confidence > 0.2 || pose.rightWrist.confidence > 0.2)
      {
        texture(face2);
      }
    }
  


  
  
}
  
  sphere(200, 200, 200);
  
  angleMode(DEGREES);
  

  
  
}

function modelLoaded(){
  console.log("Pose net loaded! :D "); 
}

function gotPoses(poses){
  // Check to see if machine is picking up any poses
  // by checking to see if the array isn't empty.
  console.log(poses)
  
  if(poses.length > 0){
    pose = poses[0].pose;  
  }

}
