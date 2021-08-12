function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();
    pimg = loadImage("people.png");
}
function draw() {
    image(pimg, 0, 0, 500, 400);
}