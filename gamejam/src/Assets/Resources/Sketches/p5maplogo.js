export default function sketch2(p){
var gridX = 0;
var gridY = 0;
var timer = 0, animationDuration = 2000;

var x = 0;
var y = 0;
//J
var pkt1X, pkt1Y, pkt2X, pkt2Y, pkt3X, pkt3Y, pkt4X, pkt4Y, pkt5X, pkt5Y;

//G
var dot1X, dot1Y, dot2X, dot2Y, dot3X, dot3Y, dot4X, dot4Y, dot5X, dot5Y, dot6X, dot6Y, dot7X, dot7Y;


p.setup = function() {
 p.createCanvas(75, 75);

  gridX = p.width/50;
  gridY = p.height/50;

  //J
  pkt1X = gridX*25;
  pkt1Y = gridY*12;
  pkt2X = gridX*33;
  pkt2Y = gridY*12;
  pkt3X = gridX*40;
  pkt3Y = gridY*25;
  pkt4X = gridX*33;
  pkt4Y = gridY*38;
  pkt5X = gridX*25;
  pkt5Y = gridY*38;

  //G
  dot1X = gridX*25;
  dot1Y = gridY*12;
  dot2X = gridX*17;
  dot2Y = gridY*12;
  dot3X = gridX*9;
  dot3Y = gridY*25;
  dot4X = gridX*17;
  dot4Y = gridY*38;
  dot5X = gridX*24;
  dot5Y = gridY*38;
  dot6X = gridX*24;
  dot6Y = gridY*30;
  dot7X = gridX*18;
  dot7Y = gridY*30;

}

p.draw = function () {
//p.background(255,255,255);



//grid
  p.stroke(0, 0, 0);
  p.strokeWeight(0);
  for (var i = 0; i < p.width; i+=gridX*3) {
    p.line (i, 0, i, p.height);
  }
  for (var j = 0; j < p.height; j+=gridY*3) {
    p.line (0, j, p.width, j);
  }

  //grey helping circle
  p.noFill();
  p.stroke(217,221,222);
  p.strokeWeight(1);
  p.ellipse(gridX*25, gridY*25, gridX*40, gridY*40);
  //fill(217,221,222);
  //ellipse(gridX*25, gridY*25, gridX*1, gridY*1);


  //hexagon
  p.stroke(0, 0, 0);
  p.strokeWeight(1);
  p.noFill();
  p.beginShape();
  p.vertex(gridX*15, gridY*8);
  p.vertex(gridX*35, gridY*8);
  p.vertex(gridX*44, gridY*25);
  p.vertex(gridX*35, gridY*42);
  p.vertex(gridX*15, gridY*42);
  p.vertex(gridX*5, gridY*25);
  p.vertex(gridX*15, gridY*8);
  p.endShape();


  //J
  p.noFill();
  p.stroke(162,225,240);
  p.strokeWeight(5);
  p.strokeCap(p.SQUARE);
  p.beginShape();
  p.vertex(pkt1X, pkt1Y);
  p.vertex(pkt2X, pkt2Y);
  p.vertex(pkt3X, pkt3Y);
  p.vertex(pkt4X, pkt4Y);
  p.vertex(pkt5X, pkt5Y);
  p.endShape();

  //G
  p.noFill();
  p.stroke(110,216,247);

  p.beginShape();
  p.vertex(dot1X, dot1Y);
  p.vertex(dot2X, dot2Y);
  p.vertex(dot3X, dot3Y);
  p.vertex(dot4X, dot4Y);
  p.vertex(dot5X, dot5Y);
  p.vertex(dot6X, dot6Y);
  p.vertex(dot7X, dot7Y);
  p.endShape();


}
}
