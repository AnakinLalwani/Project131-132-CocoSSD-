function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();
    img = loadImage("catsndogs.jpg");
}
function draw() {
    image(img, 0, 0, 500, 400);
}