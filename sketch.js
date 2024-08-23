let cor;
let posicaoHorizontal;//x
let posicaoVertical;//y

function setup() {
  createCanvas(400, 400);
  background ( color (100,0,0))
  cor= color ( random ( 0, 255), random( 0, 255), random ( 0,255));
  posicaoHorizontal=200;
  pocisaoViral=200;
}
  
function draw() {
  
  fill( cor)
  circle( posicaoHorizontal)}


 if( mouseX < posicaoHorizontal){
 posicaoHorizontal=posicaoHhorizontal+ 1;
   {

 if(mouseX > posicaoHorizontal){                                                                      
  posicaoHorizontal = posicaoHorizontal + 1;
     
     
 if( mouseY > posicaoHoriental){
   posicaoVertical--;
 }
     
 if(mouseY > posicaoVertical){
   posicaoVertical++;
 }
   
 if( mouseIsPressed){
    cor= color(random (0,255), random (0, 255),random(0,255),
               random (0,100));
   
 }
}
  
     
     