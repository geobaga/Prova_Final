var xR = 100
var yR = 100
var lC = 60 
var aC = 60
var VxC = []
var VyC = []
var cartaValor = 'A' 
var cartaVirada = false 
var VcVirada = []
var VcValor = ['A','B','B','A']
function setup() {
  createCanvas(600, 600); 
  for(i=0; i<4; i++){
    VcVirada[i] = true
  }
  VxC[0] = 100
  VyC[0] = 100
  VxC[1] = 200
  VyC[1] = 100  
  VxC[2] = 300
  VyC[2] = 100
  VxC[3] = 400
  VyC[3] = 100
  background(200);
}

function draw() {

  for(i=0; i<4; i++){
    rect(VxC[i],VyC[i],lC,aC)  
    if ( VcVirada[i] ) {
      textSize(26)
      text(VcValor[i],VxC[i]+20,VyC[i]+40) 
    }
  }
}

function mouseClicked() {

  for(i=0; i<4; i++ ) {
    if (mouseX > VxC[i] && mouseX < VxC[i] + lC && mouseY > VyC[i] && mouseY < VyC[i] + aC ) { 
      VcVirada[i] = ! VcVirada[i]
    }
  }
}