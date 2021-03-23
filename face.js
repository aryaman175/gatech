let x,y,l,h;
let eyelx,eyerx,ey;
let mx, my;
// centre of face
x= 300;
y =300;
//dimensions of face
l=260;  // length
h=380;  //height
//centre of eyes
elx=x-55;
erx=x+55;
ey=y-80;

function face()
{
  fill(240, 205, 199);
  noStroke();
  ellipse(x,y,l,h);
}

function eyes()
{
  //eyes
  fill(250);
  ellipse(x-55,y-80,40,15)
  ellipse(x+55,y-80,40,15)
  //pupils
  fill(79, 50, 37)
  circle(x-55,y-80,14)
  circle(x+55,y-80,14)
  //eyebrows
  noFill();
  stroke(0)
  strokeWeight(4);
  arc(x-55,y-90,90,40,200,-20)
  arc(x+55,y-90,90,40,200,-20)
}

function glasses()
{
  // rectangles of glasses
  strokeWeight(3);
  stroke(0);
  noFill();
  rect(x-55,y-80,70,30)
  rect(x+55,y-80,70,30)
  //line joining glasses
  line(x-17,y-80,x+17,y-80);
  //lines to ears
  line(x-90,y-80,170,y-80);
  line(x+90,y-80,430,y-80);
}

function hair()
{
  // setting hair params
  noStroke();
  fill(56, 45, 43)
  rectMode(CENTER)
  angleMode(DEGREES);
  //left element
  rotate(-20);
  rect(200,210,220,50,30,20)
  rotate(20);
  //right element
  rotate(60);
  rect(340,-260,180,50,30,20)
  rotate(-60);

  //left tiny element
  strokeWeight(35);
  stroke(56, 45, 43)
  line(185,175,165,217)
}

function ears()
{
  //ear color
  fill(240, 205, 199);

  //left ear
  //ear shape
  noStroke();
  ellipse(x-130,y-40,40,90)
  //ear cut
  stroke(200, 140, 149);
  line(x-140,y-40,x-130,y-60)
  line(x-140,y-40,x-130,y-20)

  //right ear
  //ear shape
  noStroke();
  ellipse(x+130,y-40,40,90)
  //ear cut
  stroke(200, 140, 149);
  line(x+140,y-40,x+130,y-60)
  line(x+140,y-40,x+130,y-20)
}

function nose()
{
  // coordinates of nostrils
  let noseLX = x-15;
  let noseRX = x+15;
  let noseY  = y+25;
  //nose shape
  noFill();
  strokeWeight(3);
  stroke(140, 100, 101);
  arc(x,y+15,60,35,-10,190);
  line(271,310,290,245)
  line(328,308,310,245)
  //nostrils
  noStroke();
  fill(80, 46, 28);
  ellipse(noseLX,noseY,12,8);
  ellipse(noseRX,noseY,12,8);
}

function mouth()
{
  mx=x;
  my=y+55;
  let ml = 120;
  let mh = 60;
  noStroke();
  //bottom lip
  fill(240, 140, 148)
  arc(mx,my+10,ml-3,mh,0,360);
  //covering bottom lip to form eclipse
  fill(240, 205, 199);
  arc(mx,my,ml,mh,0,360);
  //teeth
  //white portion
  fill(255)
  arc(mx,my,ml,mh,20,160);
  //lines for teeth
  stroke(0);
  strokeWeight(2);
  line(mx-10,my+10,mx-10,my+30)
  line(mx+10,my+10,mx+10,my+30)
  line(mx-30,my+10,mx-30,my+27)
  line(mx+30,my+10,mx+30,my+27)
  //top lip
  noStroke();
  fill(240, 140, 148)
  arc(mx,my+20,ml-5,mh-35,180,360);

  //finishing touches
  //covering intersection between lips on both sides
  fill(240, 205, 199);
  circle(mx-60,my+15,13.5)
  circle(mx+60,my+15,13.5)
  //line to cover white portion above top lip
  stroke(240, 205, 199);
  strokeWeight(8);
  line(mx-15,my+4,mx+15,my+4)
}

function mouche()
{
  //mouche
  stroke(56, 45, 43,220);
  strokeWeight(10);
  line(mx-60,my,mx-5,my-10);
  line(mx+60,my,mx+5,my-10);
  //beard
  //central dark portion
  noStroke();
  fill(56, 45, 43,230)
  arc(x,y+120,170,140,0,180)
  //drawing arc to create elipse
  fill(240, 205, 199)
  arc(x,y+110,150,100,0,180)
  //below mouth small portion
  fill(56, 45, 43,230)
  rect(x,y+110,50,20,10,10)
  //left and right side extreme hair
  stroke(56, 45, 43,100);
  strokeWeight(20);
  line(x-120,y+32,x-95,y+114)
  line(x+120,y+32,x+95,y+114)
}
