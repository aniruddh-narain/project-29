function setup() {
  createCanvas(800,400);

  var block1 = createSprite(400, 200, 50, 50);
  var block2 = createSprite(375,252,50,50);
  var block3 = createSprite(427,252,50,50);
  var block4 = createSprite(350,304,50,50);
  var block5 = createSprite(402,304,50,50);
  var block6 = createSprite(454,304,50,50);
  var stone = createSprite(100,250,40,40);

}

function draw() {
  background(255,255,255);  
  drawSprites();
}

