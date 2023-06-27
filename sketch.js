/* Código fonte público em:
https://replit.com/@geobaga/Prova2
e vídeos explicativos no One Drive em
https://shokan.link/Prova2*/

//as primeiras variáveis são responsáveis por os tamanhos dos botões na primeira tela e suas posições
let tela = 0;
let xMenu = 500;
let menuLargura = 300;
let yMenu1 = 200;
let menuAltura = 70;
let yMenu2 = 300;
let yMenu3 = 400;
//as variáveis do botão volar nas telas de jogo, instruções e créditos
let xV = 1000;
let vLargura = 100;
let yV = 500;
let vAltura = 60;
//variavéis extras para o campo de texto em instruções e créditos
let xCampoText = 200;
let yCampoText = 60;
let larguraText = 700;
let alturaText = 500;
//um jogo de memória exige um bom espaço em tela para as cartas, atualmente uma largura de 1200 é o recomendado para a maioria dos computadores

//prova final
var xR = 100
var yR = 100
var lC = 60 
var aC = 60
var VxC = []
var VyC = []
 
var cartaVirada = false 
var VcVirada = []
var Palavras = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var VcValor = []


function setup() {
  createCanvas(1200, 600);
  background(0,0,255);
  VcValor = shuffle(Palavras)
  for(i=0; i<18; i++){
    VcVirada[i] = true
  }
  VxC = [100, 200, 300, 400, 500, 600, 100, 200, 300, 400, 500, 600, 100, 200, 300, 400, 500, 600]
  VyC = [100, 100, 100, 100, 100, 100, 200, 200, 200, 200, 200, 200, 300, 300, 300, 300, 300, 300]


}

function telaPrincipal(){//essa é a função que invoca a tela principal se a variável tela for zero
    background(0);
    textSize(40);
    fill(255)
    text("Jogo da Memória",xMenu+menuLargura/2,yMenu1-60)
    if ( mouseX > xMenu && mouseX < xMenu + menuLargura && mouseY > yMenu1 && mouseY < yMenu1 + menuAltura) {
      fill(255);
    } else {
      fill(200);
    }
    rect(xMenu, yMenu1, menuLargura, menuAltura, 5)//retangulos com cantos arredondados e texto alinhado no centro
    textSize(40);
    fill(0);
    textAlign(CENTER, CENTER);
    text("Jogar",xMenu+menuLargura/2,yMenu1+menuAltura/2);
    if ( mouseX > xMenu && mouseX < xMenu + menuLargura && mouseY > yMenu2 && mouseY < yMenu2 + menuAltura) {
      fill(255);
    } else {
      fill(200);
    }
    rect(xMenu, yMenu2, menuLargura, menuAltura, 5);
    textSize(40);
    fill(0);
    text("Instruções",xMenu+menuLargura/2,yMenu2+menuAltura/2);
  if ( mouseX > xMenu && mouseX < xMenu + menuLargura && mouseY > yMenu3 && mouseY < yMenu3 + menuAltura) {
      fill(255);
    } else {
      fill(200);
    }
    rect(xMenu, yMenu3, menuLargura, menuAltura, 5);
    textSize(40);
    fill(0);
    text("Créditos",xMenu+menuLargura/2,yMenu3+menuAltura/2);
}

function telaJogar() {//jogando está sem jogo no momento
  background(255, 253, 7);
  textSize(40);
  fill(0);
  text("Jogando",0,0);
  textAlign(LEFT, TOP);//posição de alinhamento do texto
  fill(255, 0, 0);
  rect(xV, yV, vLargura, vAltura, 5);
  textSize(30);
  fill(255);
  text("Voltar", xV+10, yV+vAltura/2);;

  //Prova Final
    for(i=0; i<18; i++){

      fill(255)
      rect(VxC[i],VyC[i],lC,aC)  
      if ( VcVirada[i] ) {
        textSize(40)
        fill(0)
        text(VcValor[i],VxC[i]+20,VyC[i]+20) 
    }
  }
}

function telaInstrucoes() {//tudo que está na tela de Instruções também foi expelhado na tela de créditos para melhor compatibilidade
  background(255, 253, 7);
  textSize(40);
  fill(0);
  text("Instruções:",0,0);
  textAlign(LEFT, TOP);
  fill(0);
  rect(xCampoText, yCampoText, larguraText, alturaText, 5);
  textSize(20);
  fill(255);
  text("O Jogo da Memória é um jogo divertido e educativo que testa a sua \ncapacidade de memorizar imagens relacionadas à internet.\nO objetivo do jogo é encontrar todos os pares de cartas que têm o mesmo \nsímbolo, como um navegador.\nPara jogar, você precisa clicar em duas cartas viradas para baixo \ne ver se elas combinam.\nSe elas combinarem, elas ficam viradas para cima e você ganha um ponto. \nSe elas não combinarem, elas voltam a ficar viradas para baixo e você precisa \ntentar de novo. \nO jogo termina quando você encontrar todos os pares ou quando o tempo \nacabar. Boa sorte e divirta-se!", xCampoText, yCampoText);
  fill(255, 0, 0);
  rect(xV, yV, vLargura, vAltura, 5);
  textSize(30);
  fill(255);
  text("Voltar", xV+10, yV+vAltura/2);
}

function telaCreditos() {
  background(1, 100, 183);
  textSize(40);
  fill(255);
  text("Créditos:",0,0);
  fill(0);
  rect(xCampoText, yCampoText, larguraText, alturaText, 5);
  textSize(20);
  fill(255);
  text("Este jogo da memória foi criado por Geovane Rodrigues dos Santos com base \nna licença Atribuição 4.0 Internacional (CC BY 4.0) do Creative Commons. \nIsso significa que você pode compartilhar e adaptar este jogo para qualquer \nfinalidade, mesmo comercialmente, desde que você atribua o crédito aos \ncriadores originais e indique quaisquer mudanças que você fez. \nPara saber mais sobre esta licença, visite \nhttps://creativecommons.org/licenses/by/4.0/deed.pt_BR.", xCampoText, yCampoText);
  textAlign(LEFT, TOP);
  fill(255, 0, 0);
  rect(xV, yV, vLargura, vAltura, 5);
  textSize(30);
  fill(255);
  text("Voltar", xV+10, yV+vAltura/2);
  
}

function draw() {//aqui a função draw desenha a tela definida a partir da variável tela
  if (tela === 0){
    telaPrincipal();
  }
  if (tela === 1 ){
    telaJogar();
  }
  if (tela === 2 ){
    telaInstrucoes();
  }
  if (tela === 3){
    telaCreditos();
  }
  //a função mouseClicked() de acordo com a área definida muda a tela a ser desenhada pela função draw()
}
function mouseClicked() {
  if ( tela === 0 ){
    if ( mouseX > xMenu && mouseX < xMenu + menuLargura && mouseY > yMenu1 && mouseY < yMenu1 + menuAltura) {
      tela = 1;
    }
    if ( mouseX > xMenu && mouseX < xMenu + menuLargura && mouseY > yMenu2 && mouseY < yMenu2 + menuAltura) {
      tela = 2;
    }
    if ( mouseX > xMenu && mouseX < xMenu + menuLargura && mouseY > yMenu3 && mouseY < yMenu3 + menuAltura) {
      tela = 3;
    }
  }
  else if (tela === 1 || tela === 2 || tela === 3){//se não estiver em tela 0 o mouse clicked atua para voltar a tela 0 se clicada em o botão voltar.
    if ( mouseX > xV && mouseX < xV + vLargura && mouseY > yV && mouseY < yV + vAltura) {
      tela = 0;
    }
  }
  if (tela === 1){
    for(i=0; i<18; i++ ) {
      if (mouseX > VxC[i] && mouseX < VxC[i] + lC && mouseY > VyC[i] && mouseY < VyC[i] + aC ) {
        VcVirada[i] = ! VcVirada[i]
    }
  }
  
  }
}