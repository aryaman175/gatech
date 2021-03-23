function setup()
{
  let cnv=createCanvas(1200, 650);
  //cnv.position(50,100)
}

function draw()
{
  background(255);
  //face
  face();
  eyes();
  glasses();
  ears();
  hair();
  mouth();
  nose();
  mouche();
  //cycle
  leg2();
  pedal();
  backWheel();
  frontWheel();
  lines();
  seat();
  handle();
  head();
  body();
  arms();
  leg1();
  tail();
  sign();
}

function mousePressed()
{
  circle(mouseX, mouseY,10)
  console.log(mouseX-tx2);
  console.log(mouseY-ty);
}
