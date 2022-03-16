const readline = require('readline-sync');


function calculaVel() {
  const distancia = readline.questionInt('Qual a distancia?');
  const tempo = readline.questionInt('Qual o tempo?');
  
  const velocidadeMedia = (distancia / tempo).toFixed(2);
  
  console.log(`Velocidade média: ${velocidadeMedia} m/s`);
}

calculaVel();
