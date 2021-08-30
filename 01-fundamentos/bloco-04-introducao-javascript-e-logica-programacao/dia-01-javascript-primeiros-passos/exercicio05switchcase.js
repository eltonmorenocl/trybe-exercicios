// 1. Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
// 2. Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica'


let status = "aprovado";

switch (status) {
    case "aprovado":
        console.log("Parabéns, Você foi selecionado!");
        break;
    case "lista":
        console.log("Você está na lista de espera");
        break;
    case "reprovado":
        console.log("Obrigado pela sua particação, seu curriculo ficará registrado no nosso banco de dados");
        break;
    default:
        console.log("Opção incorreta! Tente de novo!")
}