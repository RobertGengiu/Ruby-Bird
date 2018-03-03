var bird;
var pipes = [];
var bg;
var img;

function setup() {
  createCanvas(800, 1000);
  bird = new Bird();
  pipes.push(new Pipe());
  bg = loadImage("ruby.png");
  img = loadImage("twitter.png");
}

function draw() {
  background(bg);

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
    }


    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }


  }

  bird.update();
  bird.show();

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }



}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}