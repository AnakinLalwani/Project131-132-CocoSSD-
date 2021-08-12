vimg = "";
function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();
    vimg = loadImage("vehicles.png");
}
function draw() {
    image(vimg, 0, 0, 500, 400);
}