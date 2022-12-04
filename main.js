function preload(){

}

function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(200, 250);
    webcam=createCapture(VIDEO);
    webcam.hide();
}

function draw(){
    image(webcam, 51, 51, 530, 380);

    circle(64, 20, 20);
    circle(128, 20, 20);
    circle(192, 20, 20);
    circle(256, 20, 20);
    circle(320, 20, 20);
    circle(384, 20, 20);
    circle(448, 20, 20);
    circle(512, 20, 20);
    circle(576, 20, 20);

    rect(54, 440, 30, 30);
    rect(118, 440, 30, 30);
    rect(182, 440, 30, 30);
    rect(246, 440, 30, 30);
    rect(310, 440, 30, 30);
    rect(374, 440, 30, 30);
    rect(438, 440, 30, 30);
    rect(502, 440, 30, 30);
    rect(566, 440, 30, 30);
    
}

function take_snapshot(){
    save("image.png")
}

