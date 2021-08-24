var img = "";
function preload() {
    img = loadImage("catsndogs.jpg");
}
function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();
}
function draw() {
    image(img, 0, 0, 500, 400);
}