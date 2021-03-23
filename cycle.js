//coordinates of pedal circle
let cx =880;
let cy =450;
let wd = 170; //distance of wheels from ref pt
let wr = 100; //radius of wheels
//location of intersection of lines at the top
let ty = cy-150;
//top x coor of 1st intersection
let tx1=cx-wd+60;
//top x coor of 2nd intersection
let tx2=cx+50;

function pedal()
{
  //pedal circle
  fill(0)
  noStroke()
  circle(cx,cy,30)
  //1 random pedal
  //rect(cx,cy+20,30,25)
}

function backWheel()
{
  noFill();
  stroke(0);
  strokeWeight(10);
  circle(cx+wd,cy,wr)
  //text("Tech",800,300,700,400)
}

function frontWheel()
{
  noFill();
  stroke(0);
  strokeWeight(10);
  circle(cx-wd,cy,wr)
}

function lines()
{
  stroke(252,179,0)
  //front wheel to 1st top pt
  line(cx-wd,cy,tx1,ty)
  //1st top pt to ref
  line(tx1,ty,cx,cy)
  //1st top pt to 2nd top pt
  line(tx1,ty,tx2,ty)
  // 2nd top pt to ref
  line(tx2,ty,cx,cy)
  //2nd top pt to back wheel
  line(tx2,ty,cx+wd,cy)
  //ref pt to back wheel
  line(cx,cy,cx+wd,cy)
}

function seat()
{
  //line from 2nd top pt to seat
  line(tx2,ty,tx2+6,ty-20)
  //seat
  //fill(0)
  stroke(0);
  rect(tx2+8,ty-30,40,10)
}

function handle()
{
  //line from 1st top pt to handle
  stroke(252,179,0)
  line(tx1,ty,tx1+12,ty-30)
  //handle
  noFill();
  stroke(0);
  arc(tx1+35,ty-30,50,20,90,270)
}

function body()
{
  noStroke();
  fill(0)
  //rotate(20)
  //ellipse(tx2,ty-100,80,150)
  stroke(0)
  strokeWeight(90);
  line(tx2+15,ty-80,tx2-10,ty-140)
}

function head()
{
  noStroke();
  fill(252,179,0)
  ellipse(tx2-55,ty-200,100,130)
  //eye
  fill(210)
  circle(tx2-80,ty-225,30)
  //hair strand
  stroke(0);
  strokeWeight(3);
  noFill();
  arc(tx2-90,ty-235,80,50,180,320)
}

function arms()
{
  stroke(252,218,58);
  strokeWeight(15);
  //from body to handle
  line(tx2-20,ty-150,tx1+20,ty-20)
  line(tx2-40,ty-130,tx1+20,ty-40)
}

function leg1()
{
  //body to pedal
  stroke(0)
  strokeWeight(20);
  line(tx2+5,ty-45,cx-10,cy-100)
  line(cx-10,cy-100,cx,cy)
  //body
}
function leg2()
{
  //body to pedal
  strokeWeight(20);
  stroke(0)
  line(tx2+5,ty-45,cx,cy)

}

function tail()
{

  noStroke();
  //1st trap
  fill(252,179,0)
  beginShape(QUADS);
vertex(tx2+60,ty-85);
vertex(tx2+19,ty-32);
vertex(tx2+50,ty-19);
vertex(tx2+83,ty-65);
endShape(CLOSE);
//2nd trap
fill(0)
beginShape(QUADS);
vertex(tx2+50,ty-19);
vertex(tx2+83,ty-65);
vertex(tx2+109,ty-49);
vertex(tx2+82,ty-9);
endShape(CLOSE);
//3rd trap
fill(252,179,0)
beginShape(QUADS);
vertex(tx2+109,ty-49);
vertex(tx2+82,ty-9);
vertex(tx2+113,ty-11);
vertex(tx2+126,ty-30);
endShape(CLOSE);
//4th trap
fill(0)
beginShape(QUADS);
vertex(tx2+126,ty-30);
vertex(tx2+113,ty-11);
vertex(tx2+134,ty-8);
vertex(tx2+137,ty-12);
endShape(CLOSE);
}

function sign()
{
  textFont('Courier New')
  textSize(20);
  text("Sketches by Aryaman Kumar",cx,cy+120)
  text("Built using p5.js",cx,cy+150)
}
