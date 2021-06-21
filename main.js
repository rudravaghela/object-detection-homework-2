img = "";
function setup(){
canvas = createCanvas(600,500);
canvas.center();
}

function draw(){
image(img,0,0,600,500);
fill("#4287f5");
text("laptop",310,50);
textSize(20);
stroke("#ff0000");
noFill();
rect(220,60,300,300);
}

function preload(){
img = loadImage("laptop.png");

}
