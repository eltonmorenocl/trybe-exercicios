// Parte I - Objetos e For/In
// Usando o objeto abaixo, faça os exercícios a seguir:
// Copiar
// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
// Copiar
// Bem-vinda, Margarida
// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
// Copiar
// {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'Sim'
// }
// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
// Copiar
// personagem
// origem
// nota
// recorrente
// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
// Copiar
// Margarida
// Pato Donald
// Namorada do personagem principal nos quadrinhos do Pato Donald
// Sim
// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
// Copiar
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!


let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim',
  };
// 1.
  console.log("Bem-vinda, " + info.personagem);

// 2.
  console.log(info['recorrente']);

// 3.
for (let key in info){
    console.log(key)
}

// 4.
for (let key in info){
    console.log(info[key])
}

let info2 = {
    personagem: 'Tio patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
  };



console.log(info.personagem + " e " + info2.personagem)
console.log(info.origem + " e " + info2.origem)
console.log(info.nota + " e " + info2.nota)
console.log("Ambos recorrentes")