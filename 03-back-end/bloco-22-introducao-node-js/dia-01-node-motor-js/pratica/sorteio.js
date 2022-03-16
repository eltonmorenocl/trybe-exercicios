const readline = require('readline-sync');

function resultado(numero, resposta) {
  if (numero !== resposta) {
    return console.log(`Opa, não foi dessa vez. O número era ${numero}`);
  }

  return console.log("Parabéns, número correto!");
}

function game() {
  const numero = parseInt(Math.random() * 10);

  const resposta = readline.questionInt("digite um numero entre 0 a 10");
  
  resultado(numero, resposta);

  const novamente = readline.question("Deseja jogar novamente?");

  if(novamente !== 's') return console.log("ok Até a proxima!");

  game();
}

game();