let tela = 1;
let largura = 200;
let altura = 50;
let xMenu = 260;
let yMenu1 = 160;
let yMenu2 = 215;
let yMenu3 = 275;

let xMenuGO = 115;
let xMenuGO2 = 465;
let yMenuGO = 220;
let yMenuGO2 = 300;

let xMenuF = 260;
let yMenuF = 300;

let pontos = 0;
let nivel = 1;
let barreiraPontos = 10;

// Tela 2 - voltar

let largura2 = 110;
let altura2 = 35;
let xMenu2 = 20;
let yMenu4 = 25;

// Tela 3 - voltar

let largura3 = 110;
let altura3 = 35;
let xMenu3 = 20;
let yMenu5 = 25;

// Tela 4 - voltar

let largura4 = 110;
let altura4 = 35;
let xMenu4 = 20;
let yMenu6 = 25;

// palavra 
let palavra1 = "MA +__+ CO";

let opcaoPalavra1 = "BO";
let opcaoPalavra2 = "LE";
let opcaoPalavra3 = "CA";
let opcaoPalavra4 = "TA";

// palavra 2
let palavra2 = "BO +__+ CA";

let opcao2Palavra1 = "NE";
let opcao2Palavra2 = "TO";
let opcao2Palavra3 = "ME";
let opcao2Palavra4 = "DA";

// palavra 3
let palavra3 = "L I _ P E Z A";
let palavra4 = "P I T A _ G A";

let opcao3Palavra1 = "M";
let opcao3Palavra2 = "N";

let opcao4Palavra1 = "M";
let opcao4Palavra2 = "N";

// posições das sílabas 2 
// primiera sílaba 
let xS2P1 = 144;
let yS2P1 = 250;

// segunda sílaba
let xS2P2 = 288;
let yS2P2 = 250; 

// terceira sílaba
let xS2P3 = 432;
let yS2P3 = 250;

// quarta sílaba
let xS2P4 = 576;
let yS2P4 = 250;

// Retângulo sílabas
// Primeira
let larguraS1 = 50;
let alturaS1 = 22;
let xMenuS1 = 120;
let yMenuS1 = 230;

let yMenuN1 = 240;

// Segunda
let larguraS2 = 50;
let alturaS2 = 22;
let xMenuS2 = 264;
let yMenuS2 = 250;

// Terceira
let larguraS3 = 50;
let alturaS3 = 22;
let xMenuS3 = 408;
let yMenuS3 = 250;

// Quarta
let larguraS4 = 50;
let alturaS4 = 22;
let xMenuS4 = 551;
let yMenuS4 = 250;

// posições das sílabas 
// primiera sílaba 
let xSP1 = 144;
let ySP1 = 260;

// segunda sílaba
let xSP2 = 288;
let ySP2 = 260; 

// terceira sílaba
let xSP3 = 432;
let ySP3 = 260;

// quarta sílaba
let xSP4 = 576;
let ySP4 = 260;

let larguraSilaba = 50;
let alturaSilaba = 21;  

// Imagens
let img;
let img2;
let img3;
let img4;
let img5;

function preload() {
  img = loadImage('fundo.jpg');
  img2 = loadImage('fase.jpg');
  img3 = loadImage('info.jpg');
  img4 = loadImage('sthe.png');
  img5 = loadImage('mae.png');

}

function setup() {
  createCanvas(720, 400);
}

function draw() {
  textStyle(NORMAL);
  // Menu principal
  if (tela == 1) {
    background(img);

    // Início do  jogo - Menu inicial com três opções
    textAlign(CENTER);

    textStyle(BOLDITALIC);
    textSize(30);
    text("Salve as Palavras", 360, 50);

    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura) {
      stroke('rgba(0,255,0,0.25)');
      fill('rgb(0,255,0)');
      rect(xMenu, yMenu1, largura, altura, 35);
      if (mouseIsPressed) {
        tela = 2;
      }
    }

    fill('#222222');
    noStroke();
    textSize(26);
    textStyle(NORMAL);
    text("Jogar", 360, 190);  

    // Informações
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura) {
      stroke('rgba(0,255,0,0.25)');
      fill('rgb(0,255,0)');
      rect(xMenu, yMenu2, largura, altura, 35);
      if (mouseIsPressed) {
        tela = 3;
      }
    }

    fill('#222222');
    noStroke();
    text("Sobre o Jogo", 360, 250);

    // Créditos
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura) {
      noStroke();
      fill('rgb(0,255,0)');
      rect(xMenu, yMenu3, largura, altura, 35);
      if (mouseIsPressed) {
        tela = 4;
      }
    }
    
    fill('#222222');
    noStroke();
    text("Créditos", 360, 310);

  }

  // Início do jogo
  else if (tela == 2) {
    background(img2);
    textSize(25);
    textStyle(BOLD);
    fill(304);
    text("Encontre a sílaba", 360, 50);
    text("Nível: "+ nivel , 620, 50);
    text(palavra1, 360, 180);
    
    noStroke();
    fill('white');
    // para a primeira sílaba 
    text(opcaoPalavra1, xSP1, ySP1);
    if (mouseX > xMenuS1 && mouseX < xMenuS1 + larguraS1 && mouseY > yMenuN1 && mouseY < yMenuN1 + alturaS1) {
      stroke('white');
      noFill();
      rect(xMenuS1, yMenuN1, larguraS1, alturaS1, 35);
      if (mouseIsPressed) {
        tela = 8;
      }
    }
      
    noStroke();
    fill('white');
    // para segunda sílaba 
    text(opcaoPalavra2, xSP2, ySP2);
    if (mouseX > xMenuS2 && mouseX < xMenuS2 + larguraS1 && mouseY > yMenuN1 && mouseY < yMenuN1 + alturaS1) {
      stroke('white');
      noFill();
      rect(xMenuS2, yMenuN1, larguraS1, alturaS1, 35);
      if (mouseIsPressed) {
        tela = 8;
      }
    }
    
    noStroke();
    fill('white');
    // para treceira sílaba 
    text(opcaoPalavra3, xSP3, ySP3);
    if (mouseX > xMenuS3 && mouseX < xMenuS3 + larguraS1 && mouseY > yMenuN1 && mouseY < yMenuN1 + alturaS1) {
      stroke('white');
      noFill();
      rect(xMenuS3, yMenuN1, larguraS1, alturaS1, 35);
      if (mouseIsPressed) {
        tela = 10;
      }
    }
    
    noStroke();
    fill(255);  
    // para quarta sílaba
    text(opcaoPalavra4, xSP4, ySP4);
    if (mouseX > xMenuS4 && mouseX < xMenuS4 + larguraS1 && mouseY > yMenuN1 && mouseY < yMenuN1 + alturaS1) {
      stroke('white');
      noFill();
      rect(xMenuS4, yMenuN1, larguraS1, alturaS1, 35);
      if (mouseIsPressed) {
        tela = 8;
      }
    }
               
    // Voltar 1
    if (mouseX > xMenu2 && mouseX < xMenu2 + largura2 && mouseY > yMenu4 && mouseY < yMenu4 + altura2) {
      stroke(304);
      noFill();
      rect(xMenu2, yMenu4, largura2, altura2, 35);
      if (mouseIsPressed) {
        tela = 1;
      }
    }

    fill(304);
    noStroke();
    textSize(20);
    textStyle(BOLD);
    text("↩ Voltar", 75, 50);

  }
  // Informações
  else if (tela == 3) {
    background(img3);
    textSize(20);
    fill(0);
    text("Este jogo trata da habilidade: (EF01LP06)\n Segmentar oralmente palavras em sílabas.", 360, 150);
    text("O objetivo do jogo é valorizar as situações\n lúdicas de aprendizagem, ampliando a\n compreensão cognitiva do aluno.", 360, 250);
    
    // Voltar 2
    if (mouseX > xMenu3 && mouseX < xMenu3 + largura3 && mouseY > yMenu5 && mouseY < yMenu5 + altura3) {
      stroke(0);
      noFill();
      rect(xMenu3, yMenu5, largura3, altura3, 35);
      if (mouseIsPressed) {
        tela = 1;
      }
    }

    fill(0);
    noStroke();
    textSize(20);
    textStyle(BOLD);
    text("↩ Voltar", 70, 50);

  }
  // Game Over
  else if (tela == 8) {
    background(img3);
    fill(0);
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    textSize(30);
    text("Você errou!", 360, 200);
    
    // Tentar Novamente 2
    if (mouseX > xMenu3 && mouseX < xMenu3 + largura3 && mouseY > yMenu5 && mouseY < yMenu5 + altura3) {
      stroke(0);
      noFill();
      rect(xMenu3, yMenu5, largura3, altura3, 35);
      if (mouseIsPressed) {
        tela = 1;
      }
    }

    fill(0);
    noStroke();
    textSize(20);
    textStyle(NORMAL);
    text("Tentar Novamente", 215, 328);
    if (mouseX > xMenuGO && mouseX < xMenuGO + largura && mouseY > yMenuGO2 && mouseY < yMenuGO2 + altura) {
      stroke('grey');
      noFill();
      rect(xMenuGO, yMenuGO2, largura, altura, 35);
      if (mouseIsPressed) {
        tela = 2;
      }
    }
    fill(0);
    noStroke();
    textSize(20);
    textStyle(NORMAL);
    text("Sair", 560, 328);
    if (mouseX > xMenuGO2 && mouseX < xMenuGO2 + largura && mouseY > yMenuGO2 && mouseY < yMenuGO2 + altura) {
      stroke('grey');
      noFill();
      rect(xMenuGO2, yMenuGO2, largura, altura, 35);
      if (mouseIsPressed) {
        tela = 1;
      }
    }
  }
  
  // Créditos
  else if (tela == 4) {
    background(img3);
    textSize(20);
    fill(0);
    text("Sthéphanie Martins\n (Estudante)", 195, 330);
    text("Rosineide Martins\n (Psicopedagoga)", 525, 330);
    image(img4, 120, 100);
    image(img5, 450, 100);

    textStyle(BOLDITALIC);
    textSize(30);
    text("Créditos", 360, 70);
    
    // Voltar 2
    if (mouseX > xMenu4 && mouseX < xMenu4 + largura4 && mouseY > yMenu6 && mouseY < yMenu6 + altura4) {
      stroke(0);
      noFill();
      rect(xMenu4, yMenu6, largura4, altura4, 35);
      if (mouseIsPressed) {
        tela = 1;
      }
    }

    fill(0);
    noStroke();
    textSize(20);
    textStyle(BOLD);
    text("↩ Voltar", 70, 50);
  }
  
  // Nível 2
  else if (tela == 10){
   background(img2);
    textSize(25);
    textStyle(BOLD);
    fill(304);
    text("Encontre a sílaba", 360, 50);
    text("Nível: "+ 2 , 620, 50);
    text(palavra2, 360, 180);
    
    noStroke();
    fill('white');
    // para a primeira sílaba 
    text(opcao2Palavra1, xSP1, yS2P2);
    if (mouseX > xMenuS1 && mouseX < xMenuS1 + larguraS1 && mouseY > yMenuS1 && mouseY < yMenuS1 + alturaS1) {
      stroke('white');
      noFill();
      rect(xMenuS1, yMenuS1, larguraS1, alturaS1, 35);
      if (mouseIsPressed) {
        tela = 11;
      }
    }
       
    noStroke();
    fill('white');
    // para segunda sílaba 
    text(opcao2Palavra2, xS2P2, yS2P2);
    if (mouseX > xMenuS2 && mouseX < xMenuS2 + larguraS1 && mouseY > yMenuS1 && mouseY < yMenuS1 + alturaS1) {
      stroke('white');
      noFill();
      rect(xMenuS2, yMenuS1, larguraS1, alturaS1, 35);
      if (mouseIsPressed) {
        tela = 8;
      }
    }
    
    noStroke();
    fill('white');
    // para treceira sílaba 
    text(opcao2Palavra3, xS2P3, yS2P3);
    if (mouseX > xMenuS3 && mouseX < xMenuS3 + larguraS1 && mouseY > yMenuS1 && mouseY < yMenuS1 + alturaS1) {
      stroke('white');
      noFill();
      rect(xMenuS3, yMenuS1, larguraS1, alturaS1, 35);
      if (mouseIsPressed) {
        tela = 8;
      }
    }
    
    noStroke();
    fill(255);  
    // para a quarta sílaba
    text(opcao2Palavra4, xS2P4, yS2P4); 
    if (mouseX > xMenuS4 && mouseX < xMenuS4 + larguraS1 && mouseY > yMenuS1 && mouseY < yMenuS1 + alturaS1) {
      stroke('white');
      noFill();
      rect(xMenuS4, yMenuS1, larguraS1, alturaS1, 35);
      if (mouseIsPressed) {
        tela = 8;
      }
    }
          
    // Voltar 1
    if (mouseX > xMenu2 && mouseX < xMenu2 + largura2 && mouseY > yMenu4 && mouseY < yMenu4 + altura2) {
      stroke(304);
      noFill();
      rect(xMenu2, yMenu4, largura2, altura2, 35);
      if (mouseIsPressed) {
        tela = 1;
      }
    }

    fill(304);
    noStroke();
    textSize(20);
    textStyle(BOLD);
    text("↩ Voltar", 75, 50);   
  }
  
  else if (tela == 11){
   background(img2);
    textSize(25);
    textStyle(BOLD);
    fill(304);
    text("Encontre a letra", 360, 50);
    text("Nível: "+ 3 , 620, 50);
    text(palavra3, 360, 180);
     
    noStroke();
    fill('white');
    // para primeira letra
    text(opcao3Palavra1, xS2P2, ySP1);
    if (mouseX > xMenuS2 && mouseX < xMenuS2 + larguraS1 && mouseY > yMenuN1 && mouseY < yMenuN1 + alturaS1) {
      stroke('white');
      noFill();
      rect(xMenuS2, yMenuN1, larguraS1, alturaS1, 35);
      if (mouseIsPressed) {
        tela = 12;
      }
    }
    
    noStroke();
    fill('white');
    // para terceira sílaba 
    text(opcao3Palavra2, xS2P3, ySP1);
    if (mouseX > xMenuS3 && mouseX < xMenuS3 + larguraS1 && mouseY > yMenuN1 && mouseY < yMenuN1 + alturaS1) {
      stroke('white');
      noFill();
      rect(xMenuS3, yMenuN1, larguraS1, alturaS1, 35);
      if (mouseIsPressed) {
        tela = 8;
      }
    }
       
    // Voltar 1
    if (mouseX > xMenu2 && mouseX < xMenu2 + largura2 && mouseY > yMenu4 && mouseY < yMenu4 + altura2) {
      stroke(304);
      noFill();
      rect(xMenu2, yMenu4, largura2, altura2, 35);
      if (mouseIsPressed) {
        tela = 1;
      }
    }

    fill(304);
    noStroke();
    textSize(20);
    textStyle(BOLD);
    text("↩ Voltar", 75, 50);   
  }
  
  else if (tela == 12){
   background(img2);
    textSize(25);
    textStyle(BOLD);
    fill(304);
    text("Encontre a letra", 360, 50);
    text("Nível: "+ 4 , 620, 50);
    text(palavra4, 360, 180);
              
    noStroke();
    fill('white');
    // para primeira letra
    text(opcao4Palavra1, xS2P2, yS2P2);
    if (mouseX > xMenuS2 && mouseX < xMenuS2 + larguraS1 && mouseY > yMenuS1 && mouseY < yMenuS1 + alturaS1) {
      stroke('white');
      noFill();
      rect(xMenuS2, yMenuS1, larguraS1, alturaS1, 35);
      if (mouseIsPressed) {
        tela = 8;
      }
    }
    
    noStroke();
    fill('white');
    // para terceira sílaba 
    text(opcao4Palavra2, xS2P3, yS2P3);
    if (mouseX > xMenuS3 && mouseX < xMenuS3 + larguraS1 && mouseY > yMenuS1 && mouseY < yMenuS1 + alturaS1) {
      stroke('white');
      noFill();
      rect(xMenuS3, yMenuS1, larguraS1, alturaS1, 35);
      if (mouseIsPressed) {
        tela = 13;
      }
    }
       
    // Voltar 1
    if (mouseX > xMenu2 && mouseX < xMenu2 + largura2 && mouseY > yMenu4 && mouseY < yMenu4 + altura2) {
      stroke(304);
      noFill();
      rect(xMenu2, yMenu4, largura2, altura2, 35);
      if (mouseIsPressed) {
        tela = 1;
      }
    }

    fill(304);
    noStroke();
    textSize(20);
    textStyle(BOLD);
    text("↩ Voltar", 75, 50);       
  }
  
else if (tela == 13) {
    background(img3);
    fill(0);
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    textSize(30);
    text("Parabéns, você concluiu o jogo!", 360, 200);
    
    // Sair
    if (mouseX > xMenu3 && mouseX < xMenu3 + largura3 && mouseY > yMenu5 && mouseY < yMenu5 + altura3) {
      stroke(0);
      noFill();
      rect(xMenu3, yMenu5, largura3, altura3, 35);
      if (mouseIsPressed) {
        tela = 1;
      }
    }

    fill(0);
    noStroke();
    textSize(20);
    textStyle(NORMAL);
    text("Sair", 360, 328);
    if (mouseX > xMenuF && mouseX < xMenuF + largura && mouseY > yMenuF && mouseY < yMenuF + altura) {
      stroke('grey');
      noFill();
      rect(xMenuF, yMenuF, largura, altura, 35);
      if (mouseIsPressed) {
        tela = 1;
      }
    }
    
  }
}