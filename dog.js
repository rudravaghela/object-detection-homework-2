img = "";
function setup(){
canvas = createCanvas(600,500);
canvas.center();
}

function draw(){
image(img,0,0,600,500);
fill("#4287f5");
text("retriever",310,20);
textSize(20);
stroke("#ff0000");
noFill();
rect(180,20,300,450);
}

function preload(){
img = loadImage("retriever.jpg");

}
